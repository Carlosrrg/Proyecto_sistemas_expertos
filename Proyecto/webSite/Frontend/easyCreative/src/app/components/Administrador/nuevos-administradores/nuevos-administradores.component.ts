import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-nuevos-administradores',
  templateUrl: './nuevos-administradores.component.html',
  styleUrls: ['./nuevos-administradores.component.css']
})
export class NuevosAdministradoresComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [editarCrearAdministradoresComponent]: ', this.idUsuario);
  }

}
