import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  visible = true;
  constructor(private primengConfig: PrimeNGConfig) { 

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true; 
  }

}
