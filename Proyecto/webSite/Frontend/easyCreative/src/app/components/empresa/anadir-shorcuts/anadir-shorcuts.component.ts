import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-anadir-shorcuts',
  templateUrl: './anadir-shorcuts.component.html',
  styleUrls: ['./anadir-shorcuts.component.css']
})
export class AnadirShorcutsComponent implements OnInit {

  idUsuario:string = '';

  constructor(private comunicacionService:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [anadirShortcutsEmpComponent]: ', this.idUsuario);
  }

}
