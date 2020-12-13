import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarEmpComponent } from '../side-bar-emp/side-bar-emp.component';
import { ActivatedRoute } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-estructura-sitio-emp',
  templateUrl: './estructura-sitio-emp.component.html',
  styleUrls: ['./estructura-sitio-emp.component.css']
})
export class EstructuraSitioEmpComponent implements OnInit {
  @ViewChild('sideBar') sideBarEmpComponent:SideBarEmpComponent;

  idUsuarioSelec: string = '';

  constructor(private route : ActivatedRoute, private comunicacionService:ComunicacionService) {
    this.idUsuarioSelec = this.route.snapshot.params.id;
    console.log('El ID del usuario seleccionado [estructuraSitioEmpComponent] es: ', this.idUsuarioSelec);
    this.comunicacionService.changeMessage(this.idUsuarioSelec);
  }

  ngOnInit(): void {
  }
  
  toggleSidebar(evento){
    console.log('ejecutado desde el [estrutura sitio emp]', evento);
    this.sideBarEmpComponent.ocultarMenu(evento);
  }

}
