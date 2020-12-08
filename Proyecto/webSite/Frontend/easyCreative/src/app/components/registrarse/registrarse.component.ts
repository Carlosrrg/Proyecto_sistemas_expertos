import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresasService } from 'src/app/services/empresas.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PasswordValidation } from '../../clases/validacion';

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
    telefono: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    nombreEmpresa: new FormControl('', []),
    aceptarTerminos: new FormControl()
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

  

  nombreIn: String = '';

  verificacionContrasenas: boolean = false;
  verificacionCampos:boolean = false;
  verificacionTerminos:boolean = false;

  formContrasenas: FormGroup

  constructor(private router:Router, fb:FormBuilder, private usuarioService:UsuarioService, private empresasService:EmpresasService) {
    this.formContrasenas = fb.group({
      contrasena: ['', Validators.required],
      contrasena2: ['', Validators.required]
    },{
      validators:PasswordValidation.MatchPassword
    });
  }

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
    //console.log('contrasenas coiciden:', this.formContrasenas.valid);
    if (!this.formContrasenas.valid) {
      this.verificacionContrasenas = true;
    }
    else{
      this.verificacionContrasenas = false;
    }
    if (this.tipoUsuarioSelec == 'individual' && this.verificacionContrasenas == false) {
      if (this.formularioRegistro.valid == true) {
        this.verificacionCampos = false;
        if (this.formularioRegistro.get('aceptarTerminos').value == true) {
          this.verificacionTerminos = false;
          let data = {
            nombre: this.formularioRegistro.get('nombre').value,
            apellido: this.formularioRegistro.get('apellido').value,
            correo: this.formularioRegistro.get('email').value,
            contrasena: this.formContrasenas.get('contrasena').value,
            telefono: this.formularioRegistro.get('telefono').value,
            pais: this.formularioRegistro.get('pais').value,
            estado: "",
            codigoPostal: "",
            ciudad: "",
            direccion: "",
            genero: ""
          };
          //console.log(data);
          this.usuarioService.registrarUsuario(data).subscribe(
            res=>{
              console.log('valores de usuario individual registrado: ', res);
            },
            error=>{
              console.log(error);
            }
          );
          this.router.navigate(['/usuario']);
        }
        else{
          this.verificacionTerminos = true;
          console.log('acepte los terminos y condiciones de uso, por favor');
        }
      }
      else{
        this.verificacionCampos = true;
        console.log('el formulario esta incompleto y es invalido');
      }
    }
    else if(this.tipoUsuarioSelec == 'empresarial' && this.verificacionContrasenas == false){
      if (this.formularioRegistro.valid == true && this.formularioRegistro.get('nombreEmpresa').value != '') {
        this.verificacionCampos = false;
        if (this.formularioRegistro.get('aceptarTerminos').value == true) {
          this.verificacionTerminos = false;
          let empresa = {
            nombre: this.formularioRegistro.get('nombre').value,
            apellido: this.formularioRegistro.get('apellido').value,
            correo: this.formularioRegistro.get('email').value,
            contrasena: this.formContrasenas.get('contrasena').value,
            telefono: this.formularioRegistro.get('telefono').value,
            pais: this.formularioRegistro.get('pais').value,
            estado: "",
            codigoPostal: "",
            ciudad: "",
            direccion: "",
            genero: "",
            bloquear: false,
            nombreEmpresa: this.formularioRegistro.get('nombreEmpresa').value
          };
          //console.log(empresa);
          this.empresasService.registrarEmpresa(empresa).subscribe(
            res=>{
              console.log('valores de la empresa registrada: ', res);
            },
            error=>{
              console.log(error);
            }
          );
        }
        else{
          this.verificacionTerminos = true;
          console.log('acepte los terminos y condiciones de uso, por favor');
        }
      }
      else{
        this.verificacionCampos = true;
        console.log('el formulario esta incompleto y es invalido');
      }
    }
    else{
      this.verificacionCampos = true;
      console.log('selecciono el tipo de usuario ', this.tipoUsuarioSelec, ' pero las contrasenas no coinciden');
    }
  }

}
