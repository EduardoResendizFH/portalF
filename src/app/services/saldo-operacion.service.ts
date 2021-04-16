import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class SaldoOperacionService {

  constructor(
    private _http: HttpClient
  ) { }

  createSaldoOperacion(body){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    return this._http.post(`${URL}/api/saldo/create`, body, {headers});
  }
  
  getSaldoOperacion(){
    return this._http.get(`${URL}/api/saldo/`);
  }
  getSaldoOperacionById(id:string){
    return this._http.get(`${URL}/api/saldo/${id}`);
  }
  updateSaldoOperacion(id:string){
    return this._http.get(`${URL}/api/saldo/${id}`);
  }
  deleteSaldoOperacion(id:string){
    return this._http.get(`${URL}/api/saldo/${id}`);
  }
}
