import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  datosUsuario:any = {};  
  idUsuario:string = '';
  arregloHistorialCompras:any = [];

  constructor(private comunicacionService:ComunicacionService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [historialComprasComponet]: ', this.idUsuario);

    this.usuarioService.datosUsuarioSeleccionado(this.idUsuario).subscribe(
      res=>{
        this.datosUsuario = res;
        this.arregloHistorialCompras = res.historialCompras;
        //console.log(this.datosUsuario);
      }
    );

  }

}
