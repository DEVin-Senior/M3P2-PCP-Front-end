import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationClassCreateComponent } from './allocation-class-create.component';

describe('AllocationClassCreateComponent', () => {
  let component: AllocationClassCreateComponent;
  let fixture: ComponentFixture<AllocationClassCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationClassCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocationClassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
