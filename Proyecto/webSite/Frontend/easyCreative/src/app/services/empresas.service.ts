import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private httpClient:HttpClient) { }

  //registrar nueva empresa
  registrarEmpresa(empresa:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/empresas/registrar`,{
      nombre: empresa.nombre,
      apellido: empresa.apellido,
      correo: empresa.correo,
      contrasena: empresa.contrasena,
      telefono: empresa.telefono,
      pais: empresa.pais,
      estado: empresa.estado,
      codigoPostal: empresa.codigoPostal,
      ciudad: empresa.ciudad,
      direccion: empresa.direccion,
      genero: empresa.genero,
      bloquear: empresa.bloquear,
      nombreEmpresa: empresa.nombreEmpresa
    });
  }

  //Obtener todas las empresas
  obtenerEmpresas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/empresas',{});
  }

  //Obtener una empresa seleccionada
  datosEmpresaSeleccionada(idEmpresa):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/empresas/${idEmpresa}/detalles`,{});
  }

  //Actualizar datos de usuario
  actualizarDatos(data:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/empresas/${data.idUsuario}/actualizar-datos`,{
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

  //Cambiar contrasena empresa
  cambiarContrasena(data:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/empresas/${data.idUsuario}/cambio-contrasena`,{
      contrasena: data.nuevaContrasena
    });
  }

  //Actualizar Info empresa
  actualizarInfo(data:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/empresas/${data.idUsuario}/datos-empresa`,{
      nombreEmpresa: data.nombreEmpresa,
      descripcionEmpresa: data.descripcionEmpresa,
      direccionEmpresa: data.direccionEmpresa,
      telefono: data.telefono,
      correoEmpresa: data.correoEmpresa,
      categoriaEmpresa: data.categoriaEmpresa,
      planObtenido: data.planObtenido
    });
  }

}
