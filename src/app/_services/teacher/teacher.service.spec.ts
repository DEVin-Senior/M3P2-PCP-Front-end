import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { TeacherService } from './teacher.service';

describe('TeacherService', () => {
  let service: TeacherService;
  let injector: TestBed;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let mockResponse = {
    name: "Teste",
    phone: "1199999-9999",
    email: "teste@teste.com",
    skills: ["Java"],
    archived: false
  };
  
  let mockResponseList = [
  {
    $id: 1,
    name: "Teste",
    phone: "1199999-9999",
    email: "teste@teste.com",
    skills: ["Java"],
    archived: false
  },
  {
    $id: 2,
    name: "Teste 2",
    phone: "1199999-9999",
    email: "teste2@teste.com",
    skills: ["PHP"],
    archived: true
  }
]

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule,
        HttpClientTestingModule, BrowserAnimationsModule ]
    })
    service = TestBed.inject(TeacherService);
    injector = getTestBed();
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${TeacherService.prototype.insertTeacher.name} should create a teacher`, () => {
    let teacher =  {
        name: "Teste",
        phone: "1199999-9999",
        email: "teste@teste.com",
        skills: ["Java"],
        archived: false
    }

    spyOn(httpClient, 'post').and.returnValue(of(mockResponse));

    service.insertTeacher(teacher).subscribe(res => {
      res = teacher;
    })
    
    expect(httpClient.post).toHaveBeenCalledTimes(1);
    expect(teacher).toEqual(mockResponse);
    httpMock.verify();
  });

  it(`#${TeacherService.prototype.updateTeacher.name} should update a teacher`, () => {
    let teacher = mockResponseList[0];
    teacher.name = 'Teste Novo';

    spyOn(httpClient, 'put').and.returnValue(of(teacher));

    service.updateTeacher(teacher).subscribe(res => {
      res = teacher;
    })
    
    expect(httpClient.put).toHaveBeenCalledTimes(1);
    expect(teacher.name).toEqual('Teste Novo');
    httpMock.verify();
  });

  it(`#${TeacherService.prototype.updateTeacher.name} should update a teacher only to Archived or Unarchived`, () => {
    let teacher = mockResponseList[0];
    teacher.archived = true;

    spyOn(httpClient, 'put').and.returnValue(of(teacher));

    service.updateTeacher(teacher).subscribe(res => {
      res = teacher;
    })
    
    expect(httpClient.put).toHaveBeenCalledTimes(1);
    expect(teacher.archived).toEqual(true);
    httpMock.verify();
  });
});
