import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-administracion-paginas',
  templateUrl: './administracion-paginas.component.html',
  styleUrls: ['./administracion-paginas.component.css']
})
export class AdministracionPaginasComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [administracionPaginasEmpComponent]: ', this.idUsuario);
  }

}
