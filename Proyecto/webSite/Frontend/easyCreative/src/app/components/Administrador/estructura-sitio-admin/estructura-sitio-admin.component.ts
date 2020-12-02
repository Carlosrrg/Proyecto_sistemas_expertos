import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component'

@Component({
  selector: 'app-estructura-sitio-admin',
  templateUrl: './estructura-sitio-admin.component.html',
  styleUrls: ['./estructura-sitio-admin.component.css']
})
export class EstructuraSitioAdminComponent implements OnInit {
  @ViewChild('sideBar') sideBarComponent:SideBarComponent;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(evento){
    console.log('ejecutado desde el [estrutura sitio admin]', evento);
    this.sideBarComponent.ocultarMenu(evento);
  }

}
