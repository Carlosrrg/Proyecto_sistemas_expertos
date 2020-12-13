import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarUsuComponent } from '../side-bar-usu/side-bar-usu.component';
import { ActivatedRoute } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-estructura-sitio-usu',
  templateUrl: './estructura-sitio-usu.component.html',
  styleUrls: ['./estructura-sitio-usu.component.css']
})
export class EstructuraSitioUsuComponent implements OnInit {
  @ViewChild('sideBar') sideBarComponent:SideBarUsuComponent;

  idUsuarioSelec: string = '';

  constructor(private route : ActivatedRoute, private comunicacionService:ComunicacionService) {
    this.idUsuarioSelec = this.route.snapshot.params.id;
    console.log('El ID del usuario seleccionado [estructuraSitioComponent] es: ', this.idUsuarioSelec);
    this.comunicacionService.changeMessage(this.idUsuarioSelec);
  }

  /*//otra forma de obtener el valor de la URL
    this.parametro = this.activatedRoute.snapshot.params.id;
    console.log(this.parametro);
    this.activatedRoute.paramMap.subscribe( 
      params=>{
        console.log(params.get("id"));
        if (params.has("id")) {
          console.log(params.get("id"));
        }
      }
    );
  */ 

  ngOnInit(): void {
    
  }

  toggleSidebar(eventoRecibido){
    console.log('ejecutado desde el [estrutura sitio usu]', eventoRecibido);
    this.sideBarComponent.ocultarMenu(eventoRecibido);
  }

}
