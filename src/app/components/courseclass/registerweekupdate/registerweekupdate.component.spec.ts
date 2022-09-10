import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterweekupdateComponent } from './registerweekupdate.component';

describe('RegisterweekupdateComponent', () => {
  let component: RegisterweekupdateComponent;
  let fixture: ComponentFixture<RegisterweekupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterweekupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterweekupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
