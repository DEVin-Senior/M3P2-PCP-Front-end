import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDeleteComponent } from './courseclass-delete.component';

describe('ClassDeleteComponent', () => {
  let component: ClassDeleteComponent;
  let fixture: ComponentFixture<ClassDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
