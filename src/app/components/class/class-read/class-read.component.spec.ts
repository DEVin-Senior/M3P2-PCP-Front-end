import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassReadComponent } from './class-read.component';

describe('ClassReadComponent', () => {
  let component: ClassReadComponent;
  let fixture: ComponentFixture<ClassReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
