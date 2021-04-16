import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    public navCtrl: NavController
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
     return this.authService.validarToken().pipe(
       tap(estaAutenticado =>{
        console.log(estaAutenticado, 'guard');
        if(!estaAutenticado){
          this.navCtrl.navigateForward('/inicio');
        }
        
       })  
     )
  }
  
}
