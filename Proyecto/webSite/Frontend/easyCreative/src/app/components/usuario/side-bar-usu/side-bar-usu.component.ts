import { Component, OnInit } from '@angular/core';
import { faMarker, faCreditCard, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-side-bar-usu',
  templateUrl: './side-bar-usu.component.html',
  styleUrls: ['./side-bar-usu.component.css']
})
export class SideBarUsuComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(){
    //this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    //console.log('Id de usuario desde [sidebarComponet]: ', this.idUsuario);
  }

  opened=true;
  

  ocultarMenu(evento){
    console.log('valor mostrado desde [sideBarEmp Component]: ', evento);
    this.opened = evento;
  }

  
}
