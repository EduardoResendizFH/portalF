import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private _http: HttpClient
  ) { }

  createClient(body){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    return this._http.post(`${URL}/api/cliente/create`,body, {headers});
  }

  getClient(){
    return this._http.get(`${URL}/api/cliente/`);
  }
  getClientById(id:string){
    return this._http.get(`${URL}/api/cliente/${id}`);
  }
  updateClient(id:string){
    return this._http.get(`${URL}/api/cliente/${id}`);
  }

  deleteClient(id:string){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    return this._http.delete(`${URL}/api/cliente/${id}`, {headers});
  }

}
