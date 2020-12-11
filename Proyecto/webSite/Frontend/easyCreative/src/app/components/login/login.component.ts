import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EmpresasService } from 'src/app/services/empresas.service';
import { AdministradoresService } from 'src/app/services/administradores.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuariosArreglo:any = [];
  empresasArreglo:any = [];
  administradoresArreglo:any = [];
  idUsuarioIngresado: String = ''; 
  tipoUsuario: String = '';
  errorLogin:boolean = false;

  formularioLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required])
  });
  
  //valores de cajas de texto retornados para verificacion de validaciones
  get email(){
    return this.formularioLogin.get('email');
  }
  get contrasena(){
    return this.formularioLogin.get('contrasena');
  }

  constructor(private router:Router, private usuarioService:UsuarioService, private empresasService:EmpresasService, private administradoresService:AdministradoresService) { }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe(
      result=>{
        this.usuariosArreglo = result;
        //console.log(result);
        //console.log('los usuarios son: ', this.usuariosArreglo); 
      },
      error=>{
        console.log(error);
      }
    );
    this.empresasService.obtenerEmpresas().subscribe(
      result=>{
        this.empresasArreglo = result;
        //console.log(result);
      },
      error=>{
        console.log(error);
      }
    );
    this.administradoresService.obtenerAdministradores().subscribe(
      result=>{
        this.administradoresArreglo = result;
        //console.log(result);
      },
      error=>{
        console.log(error);
      }
    );
  }

  paginaInicio(){
    this.router.navigate(['/easy-creative']);
  }

  enviarRegistro(){
    this.router.navigate(['/registrarse']);
  }

  valorFormLogin(){
    //this.router.navigate(['/admin']);
    //console.log('Es valido el formulario: ', this.formularioLogin.valid);
    //console.log('correo de usuario: ', this.formularioLogin.get('email').value, ' contrasena de usuario: ', this.formularioLogin.get('contrasena').value);
    
    for (let i = 0; i < this.usuariosArreglo.length; i++) {
      if (this.usuariosArreglo[i].correo == this.formularioLogin.get('email').value && this.usuariosArreglo[i].contrasena == this.formularioLogin.get('contrasena').value) {
        this.idUsuarioIngresado = this.usuariosArreglo[i]._id;
        this.tipoUsuario = 'usuario';
        //console.log('el correo ingresado es: ', this.usuariosArreglo[i].correo, '  la contrasena ingresada es: ', this.usuariosArreglo[i].contrasena);
      }
    }
    for (let i = 0; i < this.empresasArreglo.length; i++) {
      if (this.empresasArreglo[i].correo == this.formularioLogin.get('email').value && this.empresasArreglo[i].contrasena == this.formularioLogin.get('contrasena').value) {
        this.idUsuarioIngresado = this.empresasArreglo[i]._id;
        this.tipoUsuario = 'empresa';
        //console.log('el correo ingresado es: ', this.empresasArreglo[i].correo, '  la contrasena ingresada es: ', this.empresasArreglo[i].contrasena);
      }
    }
    for (let i = 0; i < this.administradoresArreglo.length; i++) {
      if (this.administradoresArreglo[i].correo == this.formularioLogin.get('email').value && this.administradoresArreglo[i].contrasena == this.formularioLogin.get('contrasena').value) {
        this.idUsuarioIngresado = this.administradoresArreglo[i]._id;
        this.tipoUsuario = 'administrador';
        //console.log('el correo ingresado es: ', this.administradoresArreglo[i].correo, '  la contrasena ingresada es: ', this.administradoresArreglo[i].contrasena);
      }
    }

    if (this.tipoUsuario == 'usuario') {
      this.errorLogin = false;
      this.router.navigate(['/usuario',this.idUsuarioIngresado,'editar-perfil']);
      //console.log('ID usuario logeado: ',this.idUsuarioIngresado);
      this.idUsuarioIngresado = '';
    }  
    else if(this.tipoUsuario == 'empresa'){
      this.errorLogin = false;
      this.router.navigate(['/admin-companies',this.idUsuarioIngresado,'editar-perfil-compania']);
      //console.log('ID empresa logeado: ',this.idUsuarioIngresado);
      this.idUsuarioIngresado = '';
    }
    else if(this.tipoUsuario == 'administrador') {
      this.errorLogin = false;
      this.router.navigate(['/admin',this.idUsuarioIngresado,'visualizacion-planes-empresas']);
      //console.log('ID administrador logeado: ',this.idUsuarioIngresado);
      this.idUsuarioIngresado = '';
    }
    else{
      this.errorLogin = true;
      console.log('Ningun usuario se ha ingresado o no existe en la base de datos');
    }
    this.tipoUsuario = '';
  }

}
