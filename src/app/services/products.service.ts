import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _http: HttpClient
  ) { }

  getProducts(){
    return this._http.get(`${URL}/products/`);
  }

  deleteProducts(id:string){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    //console.log(headers);
    return this._http.delete(`${URL}/products/${id}`,{headers});
  }
}
