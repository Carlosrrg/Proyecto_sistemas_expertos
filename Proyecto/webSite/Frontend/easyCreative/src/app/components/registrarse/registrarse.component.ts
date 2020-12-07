import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  tipoUsuarioSelec:string = 'individual';
  
  formularioRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required]),
    contrasena2: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    nombreEmpresa: new FormControl('', [Validators.required])
  });

  paises:any = [
    "Honduras",
    "Guatemala",
    "El salvador",
    "Nicaragua",
    "Costa Rica",
    "Estados unidos",
    "Panama"
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //validacion de cajas de texto
  get nombre(){
    return this.formularioRegistro.get('nombre');
  }
  get apellido(){
    return this.formularioRegistro.get('apellido');
  }
  get email(){
    return this.formularioRegistro.get('email');
  }
  get contrasena(){
    return this.formularioRegistro.get('contrasena');
  }
  get contrasena2(){
    return this.formularioRegistro.get('contrasena2');
  }
  get telefono(){
    return this.formularioRegistro.get('telefono');
  }
  get pais(){
    return this.formularioRegistro.get('pais');
  }


  tipoUsuario(tipoUsuarioSelec){
    this.tipoUsuarioSelec = tipoUsuarioSelec;
    console.log(this.tipoUsuarioSelec);
  }

  paginaInicio(){
    this.router.navigate(['/easy-creative']);
  }

  valorForm(){
    console.log('es valido el formulario', this.formularioRegistro.valid);
  }

}
