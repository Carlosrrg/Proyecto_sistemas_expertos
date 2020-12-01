import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  tipoUsuarioSelec:string = 'individual';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  tipoUsuario(tipoUsuarioSelec){
    this.tipoUsuarioSelec = tipoUsuarioSelec;
    console.log(this.tipoUsuarioSelec);
  }

  paginaInicio(){
    this.router.navigate(['/easy-creative']);
  }

}
