import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AutotanquesService } from 'src/app/services/autotanques.service';

@Component({
  selector: 'app-autotanques',
  templateUrl: './autotanques.page.html',
  styleUrls: ['./autotanques.page.scss'],
})
export class AutotanquesPage implements OnInit {
  fecha = new Date();
  dia = this.fecha.getDate();
  mes = this.fecha.getUTCMonth() + 1;
  año = this.fecha.getFullYear();

  public anArray:any=[];
  data = false;
  datos:any={
    empresaFerroviaria: "",
    nAutotanques:`${this.dia}/${this.mes}/${this.año}`,
    capacidad:[],
    nEconomico:[],
    pesoTara: []
  }

  constructor(
    private _autotanqueService: AutotanquesService,
    public navCtrl: NavController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.Add();
  }

  tren(event){
    this.datos.empresaFerroviaria = event.target.value;
  }

  Add(){
    this.anArray.push({'value':''});
    }


    enviar(){
      console.log(this.anArray);
      
      for (let index = 0; index <this.anArray.length; index++) {
        let cap = this.anArray[index].capacidad;
        let nEco = this.anArray[index].nEconomico;
        let pesoTa = this.anArray[index].pesoTara;
        this.datos.capacidad.push(cap);
        this.datos.nEconomico.push(nEco);
        this.datos.pesoTara.push(pesoTa);
      }
      this._autotanqueService.createAutotanque(this.datos).subscribe((data:any) =>{
        //console.log(data);
        this.presentToast();
      });
      
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Se guardo exitosamente',
        duration: 2000
      });
      toast.present();
    }

    go(){
      this.navCtrl.navigateForward('/autotanques-watch');
    }

}
