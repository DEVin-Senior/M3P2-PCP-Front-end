import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  formTeacher: FormGroup;
  @Input() buttonText: string = "";
  // TODO analizar se é possível passar por aqui um objeto teacher, para que no update possa ser reaproveitado esse componente

  stackList: Array<any> = [
    {id: 1, name: 'C#'},
    {id: 2, name: '.NET'},
    {id: 3, name: 'SQL'},
    {id: 4, name: 'JAVA'},
    {id: 5, name: 'SPRING'},
    {id: 6, name: 'PRIMEFACES'},
    {id: 7, name: 'HTML'},
    {id: 8, name: 'CSS'},
    {id: 9, name: 'JAVASCRIPT'},
  ]

  constructor(private formBuilder: FormBuilder,) {
    this.formTeacher = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      stacks: new FormArray([])
    });

    this.addCheckboxes();
   }

  ngOnInit(): void {
  }


  salvar(): void {
    console.log(this.formTeacher);

    const selectedStacksIds = this.formTeacher.value.stacks
      .map((checked: any, i: any) => checked ? this.stackList[i].id : null)
      .filter((v: any) => v !== null);

    console.log(selectedStacksIds);

    //TODO implementar função que salvar docente ou update depende
  }

  addCheckboxes(): void {
    this.stackList.forEach(() => this.stackFormArray.push(new FormControl(false)))
  }

  get stackFormArray() {
    return this.formTeacher.controls['stacks'] as FormArray;
  }


}
