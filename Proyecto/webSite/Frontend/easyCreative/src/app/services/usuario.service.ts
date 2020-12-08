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


}