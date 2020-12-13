import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-gestion-planes',
  templateUrl: './gestion-planes.component.html',
  styleUrls: ['./gestion-planes.component.css']
})
export class GestionPlanesComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [gestionPlanesComponent]: ', this.idUsuario);
  }

}
