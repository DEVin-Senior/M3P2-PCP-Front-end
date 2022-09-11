import { TestBed } from '@angular/core/testing';
import { CourseClassService } from './courseclass.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { CourseClassCreateDto } from './dto/courseclass-create.model';
import { CourseClassUpdateDto } from './dto/courseclass-update.model';

describe('CourseClassService', () => {
  let service: CourseClassService;
  let http: HttpClient;

  let baseUrl = '/api/turmas';
  let baseUrlListar = '/api/turmas/listar';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule, MessagesModule],
      providers: [MessageService],
      schemas: []
    });
    service = TestBed.inject(CourseClassService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${CourseClassService.prototype.msgErrorHandler.name} should be true when the function is toBeUndefined.`, () => {
    expect(service.msgErrorHandler()).toBeUndefined();
  })

  it(`${CourseClassService.prototype.msgErrorHandler.name} should be true when the function is not toBeDefined.`, () => {
    expect(service.msgErrorHandler()).not.toBeDefined();
  })

  it(`${CourseClassService.prototype.msgSuccess.name} should be true when the function is toBeUndefined.`, () => {
    expect(service.msgSuccess()).toBeUndefined();
  })

  it(`${CourseClassService.prototype.msgSuccess.name} should be true when the function is not toBeDefined.`, () => {
    expect(service.msgSuccess()).not.toBeDefined();
  })

  it(`${CourseClassService.prototype.create.name} should call a POST with the correct endpoint.`, () => {
    let spy = spyOn(http, 'post').and.callThrough();
    const courseClass: CourseClassCreateDto = {
      name: 'Java Senior',
      initialDate: '2022-09-09',
      endDate: '2022-09-17',
      stack: 'Java',
      matrixLink: 'Link',
      archive: false,
      moduleEntityList: [{
        id: 1,
        name: 'Java',
        weekEntityList: [{
          id: 1,
          content: 'Java',
          initialDate: '2022-09-09',
          paid: false
        }]
      }]
    }

    service.create(courseClass);
    expect(spy).toHaveBeenCalledWith(baseUrl, courseClass);
  })

  it(`${CourseClassService.prototype.update.name} should call a PUT with the correct endpoint.`, () => {
    let spy = spyOn(http, 'put').and.callThrough();
    const courseClass: CourseClassUpdateDto = {
      name: 'Java Senior',
      initialDate: '2022-09-09',
      endDate: '2022-09-17',
      stack: 'Java',
      matrixLink: 'Link',
      archive: false,
      moduleEntityList: [{
        id: 1,
        name: 'Java',
        weekEntityList: [{
          id: 1,
          content: 'Java',
          initialDate: '2022-09-09',
          paid: false
        }]
      }]
    }

    service.update(courseClass);
    expect(spy).toHaveBeenCalledWith(`${baseUrl}/${courseClass.id}`, courseClass);
  })

  it(`${CourseClassService.prototype.read.name} should call a GET with the correct endpoint.`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.read();
    expect(spy).toHaveBeenCalledOnceWith(baseUrlListar);
  })

  it(`${CourseClassService.prototype.readById.name} should call a GET with the correct endpoint.`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.readById(1);
    expect(spy).toHaveBeenCalledOnceWith(`${baseUrlListar}/${1}`);
  })
});
