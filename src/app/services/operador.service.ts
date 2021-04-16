import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  constructor(
    private _http: HttpClient
    ) { }

    createOperador(body, photo: File){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'x-access-token': token
      });
      
      const fd = new FormData();
      fd.append('nombre',body.nombre);
      fd.append('apellidos',body.apellidos);
      fd.append('telefono',body.telefono);
      fd.append('licencia',body.licencia);
      fd.append('rfc',body.rfc);
      fd.append('myfile',photo);
      return this._http.post(`${URL}/api/operador/create/lic`,fd , {headers});
    }
  
    getOperador(){
      return this._http.get(`${URL}/api/operador/`);
    }
    getOperadorById(id:string){
      return this._http.get(`${URL}/api/operador/${id}`);
    }
    updateOperador(id:string){
      return this._http.get(`${URL}/api/operador/${id}`);
    }

    deleteOperador(id:string){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'x-access-token': token
      });
      return this._http.delete(`${URL}/api/operador/${id}`,{headers});
     // console.log(id);
      
    }
  
}
