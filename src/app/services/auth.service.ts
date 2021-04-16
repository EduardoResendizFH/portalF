import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Usuario } from '../models/Usuario.model';
import { map, tap } from 'rxjs/operators';

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

  // get role():'admin' | 'user' {
  //  // return this.usuario.roles;
  // }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this._http.get(`${URL}/api/auth/readUser`, {
      headers: {
        'x-access-token': token
      }
    }).pipe(
      tap((resp: any) => localStorage.setItem('token', resp.token)),
      map(resp => {
        console.log(resp, 'map');
        console.log(resp.user,'role auth');

        if (resp.user.role === 'admin') {
          return true;
        } else {
          return false;
        }
      })
    );
  }



}
