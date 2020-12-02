import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-emp',
  templateUrl: './side-bar-emp.component.html',
  styleUrls: ['./side-bar-emp.component.css']
})
export class SideBarEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opened=true;

  ocultarMenu(evento){
    console.log('valor mostrado desde [sideBarEmp Component]: ', evento);
    this.opened = evento;
  }

}
