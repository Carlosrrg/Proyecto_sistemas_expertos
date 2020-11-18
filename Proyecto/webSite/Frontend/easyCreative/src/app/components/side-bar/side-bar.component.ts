import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opened=true;

  ocultarMenu(evento){
    console.log('valor mostrado desde [sideBarComponent]: ', evento);
    this.opened = evento;
  }
}
