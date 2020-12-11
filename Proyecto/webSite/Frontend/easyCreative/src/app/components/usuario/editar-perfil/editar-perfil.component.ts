import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  parametro:any = '';

  constructor(private route : ActivatedRoute) {
    this.parametro = this.route.snapshot.params.id
    console.log(this.parametro);
  }

  ngOnInit(): void {
    /*console.log(this.activatedRoute);

    var id:any

    this.activatedRoute.queryParams.subscribe(params=>{
      id = params['id'] || null;
    });

    console.log(id);*/

    //this.parametro = this.activatedRoute.snapshot.params.id;
    //console.log(this.parametro);
    /*this.activatedRoute.paramMap.subscribe( 
      params=>{
        console.log(params.get("id"));
        /*if (params.has("id")) {
          console.log(params.get("id"));
        }*/
     // }
    //);
  }

}
