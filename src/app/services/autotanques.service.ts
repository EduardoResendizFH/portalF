import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AutotanquesService {

  constructor(
    private _http: HttpClient
  ) { }

  createAutotanque(body){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    return this._http.post(`${URL}/api/autotanque/create`,body, {headers});
  }

  getAutotanque(){
    return this._http.get(`${URL}/api/autotanque/`);
  }
  getAutotanqueById(id:string){
    return this._http.get(`${URL}/api/autotanque/${id}`);
  }
  updateAutotanque(id:string){
    return this._http.get(`${URL}/api/autotanque/${id}`);
  }
  deleteAutotanque(id:string){
    return this._http.get(`${URL}/api/autotanque/${id}`);
  }

}
