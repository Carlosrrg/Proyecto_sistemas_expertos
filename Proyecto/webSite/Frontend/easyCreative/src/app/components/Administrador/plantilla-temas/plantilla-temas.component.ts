import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-plantilla-temas',
  templateUrl: './plantilla-temas.component.html',
  styleUrls: ['./plantilla-temas.component.css']
})
export class PlantillaTemasComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [plantillasTemasComponent]: ', this.idUsuario);
  }

}
