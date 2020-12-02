import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarEmpComponent } from '../side-bar-emp/side-bar-emp.component'

@Component({
  selector: 'app-estructura-sitio-emp',
  templateUrl: './estructura-sitio-emp.component.html',
  styleUrls: ['./estructura-sitio-emp.component.css']
})
export class EstructuraSitioEmpComponent implements OnInit {
  @ViewChild('sideBar') sideBarEmpComponent:SideBarEmpComponent;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleSidebar(evento){
    console.log('ejecutado desde el [estrutura sitio emp]', evento);
    this.sideBarEmpComponent.ocultarMenu(evento);
  }

}
