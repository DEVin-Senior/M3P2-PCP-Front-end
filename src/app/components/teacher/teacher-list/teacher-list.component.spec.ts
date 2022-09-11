import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TeacherListComponent } from './teacher-list.component';

describe('TeacherListComponent', () => {
  let component: TeacherListComponent;
  let fixture: ComponentFixture<TeacherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
          ],
      declarations: [ TeacherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${TeacherListComponent.prototype.setArchived.name} validate status of archived is true then change to false`, () => {
    component.setArchived('1', true);

    expect(component.patchTeacher.archived).toEqual(false);
  });

  it(`#${TeacherListComponent.prototype.setArchived.name} validate status of archived is false then change to true`, () => {
    component.setArchived('1', false);

    expect(component.patchTeacher.archived).toEqual(true);
  });

  it(`#${TeacherListComponent.prototype.ngOnInit.name} Should present the button 'Novo Docente' `, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(
      'Novo Docente'
    );
  });
});
