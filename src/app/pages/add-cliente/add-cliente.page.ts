import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  datos:any={
    nombre:'',
    cre:'',
    direccion:'',
    permiso:'',
    vigencia:'',
    rfc:'',
    operador:'',
    tracto:''
  }

  constructor(
    public modalCtrl: ModalController,
    private clienteService : ClienteService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  form(){
    this.clienteService.createClient(this.datos).subscribe((data:any) =>{
     // console.log(data);
      this.presentToast();
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se guardo exitosamente',
      duration: 2000
    });
    toast.present();
  }

}
