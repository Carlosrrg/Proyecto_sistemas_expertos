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

}
