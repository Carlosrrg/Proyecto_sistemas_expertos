import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-editar-perfil-empresa',
  templateUrl: './editar-perfil-empresa.component.html',
  styleUrls: ['./editar-perfil-empresa.component.css']
})
export class EditarPerfilEmpresaComponent implements OnInit {

  idUsuario:string = '';
  datosEmpresa:any = {};

  paises:any = [
    "Honduras",
    "Guatemala",
    "El salvador",
    "Nicaragua",
    "Costa Rica",
    "Estados unidos",
    "Panama"
  ];

  categorias:any = [
    "Ropa",
    "Electronicos",
    "hogar",
    "Fontaneria",
    "Automoviles",
    "Videjuegos",
    "Computadoras"
  ];

  planes:any = [
    "Free",
    "Gold",
    "Premium"
  ];

  formularioEmpresa = new FormGroup({
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

  formularioEmpresaContrasena = new FormGroup({
    contrasenaActual: new FormControl('', [Validators.required]),
    nuevaContrasena: new FormControl('', [Validators.required]),
    nuevaContrasena2: new FormControl('', [Validators.required])
  });

  formularioEmpresaInfo = new FormGroup({
    nombreEmpresa: new FormControl('', [Validators.required]),
    direccionEmpresa: new FormControl('', [Validators.required]),
    telefonoEmpresa: new FormControl('', [Validators.required]),
    correoEmpresa: new FormControl('', [Validators.required, Validators.email]),
    categoria: new FormControl('', [Validators.required]),
    plan: new FormControl('', [Validators.required])
  });

  verificarDatosEmp:boolean = false;
  datosExitosos:boolean = false;

  vereficicarDatosContrasena:boolean = false;
  vereficicarContrasenaActual:boolean = false;
  vereficicarContrasena:boolean = false;
  contrasenaExito:boolean = false;

  infoEmpresa:any = {};
  descripcionEmp:string;

  formInfo:boolean = false;

  constructor(private comunicacionService:ComunicacionService, private empresasService:EmpresasService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    //console.log('Id de usuario desde [editarPerfilEmpComponent]: ', this.idUsuario);
    this.empresasService.datosEmpresaSeleccionada(this.idUsuario).subscribe(
      res=>{
        this.datosEmpresa = res;
        this.infoEmpresa = res.datosEmpresa;
        //console.log(this.datosEmpresa);
        this.formularioEmpresa.get('nombre').setValue(res.nombre);
        this.formularioEmpresa.get('apellido').setValue(res.apellido);
        this.formularioEmpresa.get('correo').setValue(res.correo);
        this.formularioEmpresa.get('telefono').setValue(res.telefono);
        this.formularioEmpresa.get('pais').setValue(res.pais);
        this.formularioEmpresa.get('estado').setValue(res.estado);
        this.formularioEmpresa.get('codigoPostal').setValue(res.codigoPostal);
        this.formularioEmpresa.get('ciudad').setValue(res.ciudad);
        this.formularioEmpresa.get('direccion').setValue(res.direccion);
        this.formularioEmpresa.get('genero').setValue(res.genero);

        //info empresa
        this.formularioEmpresaInfo.get('nombreEmpresa').setValue(res.datosEmpresa.nombreEmpresa);
        this.descripcionEmp = res.datosEmpresa.descripcionEmpresa;
        this.formularioEmpresaInfo.get('direccionEmpresa').setValue(res.datosEmpresa.direccionEmpresa);
        this.formularioEmpresaInfo.get('telefonoEmpresa').setValue(res.datosEmpresa.telefono);
        this.formularioEmpresaInfo.get('correoEmpresa').setValue(res.datosEmpresa.correoEmpresa);
        this.formularioEmpresaInfo.get('categoria').setValue(res.datosEmpresa.categoriaEmpresa);
        this.formularioEmpresaInfo.get('plan').setValue(res.datosEmpresa.planObtenido);

      },
      error=>{
        console.log(error);
      }
    );
  }

  datosEmpresaForm(){
    //console.log('es valido el formulario: ', this.formularioEmpresa.valid);
    if (this.formularioEmpresa.valid) {
      this.verificarDatosEmp = false;
      let data = {
        nombre: this.formularioEmpresa.get('nombre').value,
        apellido: this.formularioEmpresa.get('apellido').value,
        correo: this.formularioEmpresa.get('correo').value,
        telefono: this.formularioEmpresa.get('telefono').value,
        pais: this.formularioEmpresa.get('pais').value,
        estado: this.formularioEmpresa.get('estado').value,
        codigoPostal: this.formularioEmpresa.get('codigoPostal').value,
        ciudad: this.formularioEmpresa.get('ciudad').value,
        direccion: this.formularioEmpresa.get('direccion').value,
        genero: this.formularioEmpresa.get('genero').value,
        idUsuario: this.idUsuario
      }
      console.log(data);
      this.empresasService.actualizarDatos(data).subscribe(
        res=>{
          console.log(res);
        },
        error=>{
          console.log(error);
        }
      );
      this.datosExitosos = true;
    }
    else{
      this.datosExitosos = false;
      this.verificarDatosEmp = true;
      console.log('formulario no valido');
    }
  }

  datosEmpresaFormContrasena(){
    //console.log('es valido el formulario de contrasena: ', this.formularioEmpresaContrasena.valid);
    if (this.formularioEmpresaContrasena.valid) {
      this.vereficicarDatosContrasena = false;
      if (this.datosEmpresa.contrasena == this.formularioEmpresaContrasena.get('contrasenaActual').value) {
        this.vereficicarContrasenaActual = false;
        if (this.formularioEmpresaContrasena.get('nuevaContrasena').value == this.formularioEmpresaContrasena.get('nuevaContrasena2').value) {
          this.vereficicarContrasena = false;
          let data = {
            idUsuario: this.idUsuario,
            nuevaContrasena: this.formularioEmpresaContrasena.get('nuevaContrasena').value
          }
          this.empresasService.cambiarContrasena(data).subscribe(
            res=>{
              console.log(res);
            },
            error=>{
              console.log(error);
            }
          );
          console.log('contrasena cambiada por: ', this.formularioEmpresaContrasena.get('nuevaContrasena').value);
          this.contrasenaExito = true;
        }
        else{
          this.contrasenaExito = false;
          this.vereficicarContrasena = true;
          console.log('Las contrasenas no coinciden');
        }
      }
      else{
        this.vereficicarContrasenaActual = true;
        console.log('contrasena actual no existe en la BD');
      }
    }
    else{
      this.vereficicarDatosContrasena = true;
      console.log('formulario no valido');
    }
  }

  datosEmpresaFormInfo(){
    //console.log('es valido el formulario de informacion: ', this.formularioEmpresaInfo.valid);
    if (this.formularioEmpresaInfo.valid && this.descripcionEmp!="") {
      this.formInfo = false;
      console.log('valido');
      let data = {  
        nombreEmpresa: this.formularioEmpresaInfo.get('nombreEmpresa').value,
        descripcionEmpresa: this.descripcionEmp,
        direccionEmpresa: this.formularioEmpresaInfo.get('direccionEmpresa').value,
        telefono: this.formularioEmpresaInfo.get('telefonoEmpresa').value,
        correoEmpresa: this.formularioEmpresaInfo.get('correoEmpresa').value,
        categoriaEmpresa: this.formularioEmpresaInfo.get('categoria').value,
        planObtenido: this.formularioEmpresaInfo.get('plan').value,
        idUsuario: this.idUsuario
      };
      //console.log(data);
      this.empresasService.actualizarInfo(data).subscribe(
        res=>{
          console.log(res);
        },
        error=>{
          console.log(error);
        }
      );
    }
    else{
      this.formInfo = true;
    }
  }

}
