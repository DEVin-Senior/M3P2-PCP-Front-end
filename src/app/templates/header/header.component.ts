import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //title: String = 'TITLE';

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string{
    return this.headerService.headerData.title
  }
  
  get routerUrl(): string{
    return this.headerService.headerData.routerUrl
  }

}
