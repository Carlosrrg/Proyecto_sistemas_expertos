import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-vizualizacion-gestion-empresas',
  templateUrl: './vizualizacion-gestion-empresas.component.html',
  styleUrls: ['./vizualizacion-gestion-empresas.component.css']
})
export class VizualizacionGestionEmpresasComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [vizualizacionGestionEmpresasComponent]: ', this.idUsuario);
  }

}
