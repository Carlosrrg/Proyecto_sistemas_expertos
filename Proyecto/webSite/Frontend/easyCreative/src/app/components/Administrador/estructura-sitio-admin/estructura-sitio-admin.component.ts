import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ActivatedRoute } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-estructura-sitio-admin',
  templateUrl: './estructura-sitio-admin.component.html',
  styleUrls: ['./estructura-sitio-admin.component.css']
})
export class EstructuraSitioAdminComponent implements OnInit {
  @ViewChild('sideBar') sideBarComponent:SideBarComponent;

  idUsuarioSelec: string = '';

  constructor(private route : ActivatedRoute, private comunicacionService:ComunicacionService) {
    this.idUsuarioSelec = this.route.snapshot.params.id;
    console.log('El ID del usuario seleccionado [estructuraSitioAdminComponent] es: ', this.idUsuarioSelec);
    this.comunicacionService.changeMessage(this.idUsuarioSelec);
  }

  ngOnInit(): void {
  }

  toggleSidebar(evento){
    console.log('ejecutado desde el [estrutura sitio admin]', evento);
    this.sideBarComponent.ocultarMenu(evento);
  }

}
