import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseclass-read',
  templateUrl: './courseclass-read.component.html',
  styleUrls: ['./courseclass-read.component.scss']
})
export class CourseClassReadComponent implements OnInit {
    
  products: {code: string, name: string, category: string, quantity: number}[] =  [
    {
      code: "132435",
      name: "Detergente",
      category: "Limpeza",
      quantity: 1
    },
    {
        code: "132435",
        name: "Detergente",
        category: "Limpeza",
        quantity: 1
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
