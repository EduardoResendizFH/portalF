import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { environment } from 'src/environments/environment'

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null;
  user = {}

  constructor(
    private _http:HttpClient
  ) { }

  login(body){
    //const body = { email, password }
       return this._http.post(`${URL}/api/auth/signin`,body);
  }  
  
  async guardarToken(token: string) {
    this.token = token;
    await localStorage.setItem('token', token);
  }

  async cargarToken(){
    this.token = await localStorage.getItem('token') || null;
  }

  productos(){
    return this._http.get(`${URL}/products/`);
  }

}
