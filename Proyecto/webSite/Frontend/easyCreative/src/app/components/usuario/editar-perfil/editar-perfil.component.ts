import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  idUsuario:string = '';
  datosUsuario:any = {};


  paises:any = [
    "Honduras",
    "Guatemala",
    "El salvador",
    "Nicaragua",
    "Costa Rica",
    "Estados unidos",
    "Panama"
  ];

  formularioUsuario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    codigoPostal: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required])
  });

  formularioUsuarioContrasena = new FormGroup({
    contrasenaActual: new FormControl('', [Validators.required]),
    nuevaContrasena: new FormControl('', [Validators.required]),
    nuevaContrasena2: new FormControl('', [Validators.required])
  });

  constructor(private comunicacionService:ComunicacionService, private usuarioService:UsuarioService) {}

  ngOnInit(){
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    //console.log('Id de usuario desde [editarPerfilComponent]: ', this.idUsuario);
    this.usuarioService.datosUsuarioSeleccionado(this.idUsuario).subscribe(
      res=>{
        this.datosUsuario = res;
        console.log(this.datosUsuario);
        this.formularioUsuario.get('nombre').setValue(res.nombre);
        this.formularioUsuario.get('apellido').setValue(res.apellido);
        this.formularioUsuario.get('correo').setValue(res.correo);
        this.formularioUsuario.get('telefono').setValue(res.telefono);
        this.formularioUsuario.get('pais').setValue(res.pais);
        this.formularioUsuario.get('estado').setValue(res.estado);
        this.formularioUsuario.get('codigoPostal').setValue(res.codigoPostal);
        this.formularioUsuario.get('ciudad').setValue(res.ciudad);
        this.formularioUsuario.get('direccion').setValue(res.direccion);
        this.formularioUsuario.get('genero').setValue(res.genero);
      }
    );
  }

  datosUsuarioForm(){
    console.log('es valido el formulario: ', this.formularioUsuario.valid);
    if (this.formularioUsuario.valid) {
      let data = {
        nombre: this.formularioUsuario.get('nombre').value,
        apellido: this.formularioUsuario.get('apellido').value,
        correo: this.formularioUsuario.get('correo').value,
        telefono: this.formularioUsuario.get('telefono').value,
        pais: this.formularioUsuario.get('pais').value,
        estado: this.formularioUsuario.get('estado').value,
        codigoPostal: this.formularioUsuario.get('codigoPostal').value,
        ciudad: this.formularioUsuario.get('ciudad').value,
        direccion: this.formularioUsuario.get('direccion').value,
        genero: this.formularioUsuario.get('genero').value
      }
      console.log(data);
    }
    else{
      console.log('formulario no valido');
    }
    
  }

  datosUsuarioFormContrasena(){
    console.log('es valido el formulario de contrasena: ', this.formularioUsuarioContrasena.valid);
    if (this.formularioUsuarioContrasena.valid) {
      if (this.datosUsuario.contrasena == this.formularioUsuarioContrasena.get('contrasenaActual').value) {
        if (this.formularioUsuarioContrasena.get('nuevaContrasena').value == this.formularioUsuarioContrasena.get('nuevaContrasena2').value) {
          /*
          let data = {
            contrasenaActual: this.formularioUsuarioContrasena.get('contrasenaActual').value,
            nuevaContrasena: this.formularioUsuarioContrasena.get('nuevaContrasena').value,
            nuevaContrasena2: this.formularioUsuarioContrasena.get('nuevaContrasena2').value
          }
          console.log(data);
          */
          let data = {
            idUsuario: this.idUsuario,
            nuevaContrasena: this.formularioUsuarioContrasena.get('nuevaContrasena').value
          }
          this.usuarioService.cambiarContrasena(data).subscribe(
            res=>{
              console.log(res);
            }
          );
          console.log('contrasena cambiada por: ', this.formularioUsuarioContrasena.get('nuevaContrasena').value);
        }
        else{
          console.log('Las contrasenas no coinciden');
        }
      }
      else{
        console.log('contrasena actual no existe en la BD');
      }
    }
    else{
      console.log('formulario no valido');
    }
  }

}
