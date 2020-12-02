import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarUsuComponent } from '../side-bar-usu/side-bar-usu.component'

@Component({
  selector: 'app-estructura-sitio-usu',
  templateUrl: './estructura-sitio-usu.component.html',
  styleUrls: ['./estructura-sitio-usu.component.css']
})
export class EstructuraSitioUsuComponent implements OnInit {
  @ViewChild('sideBar') sideBarComponent:SideBarUsuComponent;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(evento){
    console.log('ejecutado desde el [estrutura sitio admin]', evento);
    this.sideBarComponent.ocultarMenu(evento);
  }

}
