import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-usu',
  templateUrl: './side-bar-usu.component.html',
  styleUrls: ['./side-bar-usu.component.css']
})
export class SideBarUsuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opened=true;

  ocultarMenu(evento){
    console.log('valor mostrado desde [sideBarEmp Component]: ', evento);
    this.opened = evento;
  }

}
