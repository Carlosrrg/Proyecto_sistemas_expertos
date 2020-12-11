import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) {}

  ngOnInit(){
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [editarPerfilComponent]: ', this.idUsuario);
  }

}
