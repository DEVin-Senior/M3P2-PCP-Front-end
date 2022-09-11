import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LayoutDefaultModule } from 'src/app/layouts/layout-default/layout-default.module';
import { LayoutFullwidthModule } from 'src/app/layouts/layout-fullwidth/layout-fullwidth.module';

import { TeacherCreateComponent } from './teacher-create.component';

describe('TeacherCreateComponent', () => {
  let component: TeacherCreateComponent;
  let fixture: ComponentFixture<TeacherCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherCreateComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AccordionModule,
        MessagesModule,
        MessageModule,
        LayoutDefaultModule,
        LayoutFullwidthModule,
        InputTextModule,
        CalendarModule,
        ButtonModule,
        DropdownModule,
        HttpClientModule,
        FormsModule,
        TableModule,
        ReactiveFormsModule,
        ImageModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${TeacherCreateComponent.prototype.ngOnInit.name} Deve apresentar o título`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(
      'Cadastrar Docente'
    );
  });
});
