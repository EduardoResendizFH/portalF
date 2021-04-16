import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { OperadorService } from 'src/app/services/operador.service';

@Component({
  selector: 'app-add-operador',
  templateUrl: './add-operador.page.html',
  styleUrls: ['./add-operador.page.scss'],
})
export class AddOperadorPage implements OnInit {
  file : File;
  uploadedFiles: Array <File>
  photoSelected: string | ArrayBuffer;
  datos:any ={
    nombre:'',
    apellidos:'',
    telefono:'',
    licencia:'',
    rfc:'',
    _idFichero:''
  }

  constructor(
    public modalCtrl:ModalController,
    private operadorService: OperadorService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  onPhotoSelected(event): void{
   if(event.target.files && event.target.files[0]){
     this.file = <File>event.target.files[0];
     //Vista de la imagen
     const reader = new FileReader();
     reader.onload = e =>this.photoSelected = reader.result;
     reader.readAsDataURL(this.file);
   }
  }

  form(){
    this.operadorService.createOperador(this.datos, this.file).subscribe((data:any) =>{
      //console.log(data);
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
