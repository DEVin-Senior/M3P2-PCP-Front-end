import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFullwidthComponent } from './layout-fullwidth.component';

describe('LayoutFullwidthComponent', () => {
  let component: LayoutFullwidthComponent;
  let fixture: ComponentFixture<LayoutFullwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutFullwidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutFullwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
