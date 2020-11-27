import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { environment } from 'src/environments/environment'
import { Usuario } from '../models/Usuario.model';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null;
  user = {};
  public usuario: Usuario;

  constructor(
    private _http:HttpClient
  ) { }

  login(body){
       return this._http.post(`${URL}/api/auth/signin`,body);
  }  

  get role():'admin' | 'user' {
    return this.usuario.roles;
  }
  


}
