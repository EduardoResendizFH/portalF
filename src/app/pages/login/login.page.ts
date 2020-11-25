import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  token: string = null;
  enter: boolean;
  datos:any={
    email:'',
    password:''
  }

  constructor(
    private auth: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {

    localStorage.clear();
    console.log(this.enter);

    if(this.enter == true) {
      this.enter = false;
      location.reload();
    }
  }

  async login(fLogin: NgForm){
     if(fLogin.invalid){return;}

     const validar = this.auth.login(this.datos).subscribe((data:any) =>{
       //console.log(data.message);
       let mensaje = data.message;
       console.log(mensaje);
       
       if (mensaje === 'User not found') {
         console.log('no eres bienvenido usuario');
       }else if(mensaje ===  'Invalid password'){
         console.log('no eres bienvenido password');
       }else{
         //console.log('bienvenido', data.token);
         this.navCtrl.navigateForward('/inicio', {animated: true});
         this.guardarToken(data.token);
       }
      })
    
  }

  async guardarToken(token: string) {
    this.token = token;
    await localStorage.setItem('token', token);
  }

}