import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterweekViewComponent } from './registerweek-view.component';

describe('RegisterweekViewComponent', () => {
  let component: RegisterweekViewComponent;
  let fixture: ComponentFixture<RegisterweekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterweekViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterweekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
