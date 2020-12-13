import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-administracion-recursos',
  templateUrl: './administracion-recursos.component.html',
  styleUrls: ['./administracion-recursos.component.css']
})
export class AdministracionRecursosComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [administracionRecursosEmpComponent]: ', this.idUsuario);
  }

}
