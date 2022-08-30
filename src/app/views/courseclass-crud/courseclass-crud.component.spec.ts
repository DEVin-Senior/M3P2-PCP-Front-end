import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCrudComponent } from './courseclass-crud.component';

describe('ClassCrudComponent', () => {
  let component: ClassCrudComponent;
  let fixture: ComponentFixture<ClassCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
