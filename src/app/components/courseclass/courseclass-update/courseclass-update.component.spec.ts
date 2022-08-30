import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassUpdateComponent } from './courseclass-update.component';

describe('ClassUpdateComponent', () => {
  let component: ClassUpdateComponent;
  let fixture: ComponentFixture<ClassUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
