import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NominacionService {

  constructor(
    private _http: HttpClient
  ) { }

  createNominacion(body){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    return this._http.post(`${URL}/api/nominacion/create`,body, {headers});
  }

  getNominacion(){
    return this._http.get(`${URL}/api/nominacion/`);
  }
  getNominacionById(id:string){
    return this._http.get(`${URL}/api/nominacion/${id}`);
  }
  updateNominacion(id:string){
    return this._http.get(`${URL}/api/nominacion/${id}`);
  }
  deleteNominacion(id:string){
    return this._http.get(`${URL}/api/nominacion/${id}`);
  }

}
