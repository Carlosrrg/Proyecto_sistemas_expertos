import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }

  //registrar nuevo usuario individual
  registrarUsuario(data:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/usuarios/registrar`,{
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      contrasena: data.contrasena,
      telefono: data.telefono,
      pais: data.pais,
      estado: data.estado,
      codigoPostal: data.codigoPostal,
      ciudad: data.ciudad,
      direccion: data.direccion,
      genero: data.genero
    });
  }

  //Obtener todos los usuarios
  obtenerUsuarios():Observable<any>{
    return this.httpClient.get('http://localhost:8888/usuarios',{});
  }

  //Obtener un usuario seleccionado
  datosUsuarioSeleccionado(idUsuario):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/usuarios/${idUsuario}/detalles`,{});
  }

  //Cambiar contrasena usuario
  cambiarContrasena(data:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/usuarios/${data.idUsuario}/cambio-contrasena`,{
      contrasena: data.nuevaContrasena
    });
  }

  //Actualizar datos de usuario
  actualizarDatos(data:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/usuarios/${data.idUsuario}/actualizar-datos`,{
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      telefono: data.telefono,
      pais: data.pais,
      estado: data.estado,
      codigoPostal: data.codigoPostal,
      ciudad: data.ciudad,
      direccion: data.direccion,
      genero: data.genero
    });
  }

  //Anadir metodos de pago
  anadirPago(data:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/usuarios/${data.idUsuario}/metodo-pago`,{
      tipoPago: data.tipoPago,
      numeroTargeta: data.numeroTargeta,
      nombrePropietario: data.nombrePropietario,
      cvs: data.cvs,
      mes: data.mes,
      anio: data.anio,
      direccion: data.direccion,
      ciudad: data.ciudad,
      estado: data.estado,
      codigoPostal: data.codigoPostal,
      telefono: data.telefono,
      pais: data.pais
    });
  }

}
