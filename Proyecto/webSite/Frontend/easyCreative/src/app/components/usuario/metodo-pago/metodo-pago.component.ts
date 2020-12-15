import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css']
})
export class MetodoPagoComponent implements OnInit {

  idUsuario:string = '';

  paises:any = [
    "Honduras",
    "Guatemala",
    "El salvador",
    "Nicaragua",
    "Costa Rica",
    "Estados unidos",
    "Panama"
  ];
  meses:any = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  anios:any = [
    2021,
    2022,
    2023,
    2024,
    2025,
    2026
  ];

  datosUsuario:any = {};
  metodoPagoArreglo:any = [];

  verificarDatostargeta:boolean = false;
  ingresadaExito:boolean = false;

  seleccionPago:string = 'tarjeta';

  formularioTargeta = new FormGroup({
    numeroTargeta: new FormControl('', [Validators.required]),
    nombrePropietario: new FormControl('', [Validators.required]),
    cvs: new FormControl('', [Validators.required]),
    mes: new FormControl('', [Validators.required]),
    anio: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    codigoPostal: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required])
  });

  constructor(private comunicacionService:ComunicacionService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.comunicacionService.customMessage.subscribe(msg => this.idUsuario = msg);
    console.log('Id de usuario desde [metodoPagoComponent]: ', this.idUsuario);

    this.usuarioService.datosUsuarioSeleccionado(this.idUsuario).subscribe(
      res=>{
        this.datosUsuario = res;
        this.metodoPagoArreglo = res.metodoPagos;
        //console.log(this.datosUsuario);
        console.log(this.metodoPagoArreglo);
      }
    );

  }

  datosTargetaForm(){
    if (this.formularioTargeta.valid) {
      this.verificarDatostargeta = false;
      let data = {
        tipoPago: '1',
        numeroTargeta: this.formularioTargeta.get('numeroTargeta').value,
        nombrePropietario: this.formularioTargeta.get('nombrePropietario').value,
        cvs: this.formularioTargeta.get('cvs').value,
        mes: this.formularioTargeta.get('mes').value,
        anio: this.formularioTargeta.get('anio').value,
        direccion: this.formularioTargeta.get('direccion').value,
        ciudad: this.formularioTargeta.get('ciudad').value,
        estado: this.formularioTargeta.get('estado').value,
        codigoPostal: this.formularioTargeta.get('codigoPostal').value,
        telefono: this.formularioTargeta.get('telefono').value,
        pais: this.formularioTargeta.get('pais').value,
        idUsuario: this.idUsuario
      };
      //console.log(data);
      this.usuarioService.anadirPago(data).subscribe(
        res=>{
          console.log(res);
        },
        error=>{
          console.log(error);
        }
      );
      this.ingresadaExito = true;
    }
    else{
      this.ingresadaExito = false;
      this.verificarDatostargeta = true;
      //console.log('formulario invalido');
    }
  }

  tipoPago(tipoPago){
    this.seleccionPago = tipoPago;
  }

}
