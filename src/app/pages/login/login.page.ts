import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
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
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    public menu: MenuController
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
       //let mensaje = data.message;
       console.log(data);
       this.auth.usuario = data.userFound;
       console.log(this.auth.usuario,'this.auth.usuario');
       
       if (data.message) {
         //console.log('no eres bienvenido usuario');
         this.failed(data.message);
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

  async failed(message) {
    const toast = await this.toastCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Acceso denegado',
      message: 'Datos ingresados son incorrectos',
      color:'danger',
      duration: 2000
    });

    await toast.present();
  }
  //menu Disable 
  ionViewDidEnter(){
    this.menu.enable(false);
  }

  ionViewWillLeave(){
    this.menu.enable(true);
  }

}
