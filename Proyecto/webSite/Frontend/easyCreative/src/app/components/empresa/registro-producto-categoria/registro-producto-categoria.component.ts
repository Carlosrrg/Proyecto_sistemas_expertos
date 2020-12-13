import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-registro-producto-categoria',
  templateUrl: './registro-producto-categoria.component.html',
  styleUrls: ['./registro-producto-categoria.component.css']
})
export class RegistroProductoCategoriaComponent implements OnInit {

  faStar = faStar;

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [registroProductoCateEmpComponent]: ', this.idUsuario);
  }

}
