import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-configuracion-sitios',
  templateUrl: './configuracion-sitios.component.html',
  styleUrls: ['./configuracion-sitios.component.css']
})
export class ConfiguracionSitiosComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [configuracionSitiosEmpComponent]: ', this.idUsuario);
  }

}
