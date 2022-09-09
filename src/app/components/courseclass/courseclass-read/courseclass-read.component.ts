import { Component, OnInit } from '@angular/core';
import { CourseClassService } from '../courseclass.service';
import { CourseClassReadDto } from '../dto/courseclass-read.model';

@Component({
  selector: 'app-courseclass-read',
  templateUrl: './courseclass-read.component.html',
  styleUrls: ['./courseclass-read.component.scss']
})
export class CourseClassReadComponent implements OnInit {
// TODO: Follow the DevInAgro (READ) Documentation 
  coursesClassReadDto!: CourseClassReadDto[];
//   courseClassReadDto: CourseClassReadDto = {
//     name: '',
//     initialDate: '',
//     endDate: '',
//     stack: '',
//     archive: false,
//  }

  courses: {name: string, initialDate: string, endDate: string, stack: string, archive: boolean}[] =  [];

  constructor(/*private courseClassService: CourseClassService*/) {
   }

  ngOnInit(): void {
  //   this.graoService.read().subscribe((graos) => {
  //     this.graos = graos;
  //   });
  //   this.fazendaService.read().subscribe((fazendas) => {
  //     this.fazendas = fazendas;
  //     fazendas.forEach((fazenda) => {
  //       this.graos.forEach((grao) => {
  //         {
  //           if (fazenda.grao == grao.nome) {
  //             fazenda.previsaoColheita = grao.previsao_colheita;
  //           }
  //         }
  //       });
  //     });
  //   });
  // }
    //this.courses.push(this.coursesClassReadDto);
  }

}
