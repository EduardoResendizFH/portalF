import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SaldoOperacionService } from 'src/app/services/saldo-operacion.service';

@Component({
  selector: 'app-add-saldo-opereacion',
  templateUrl: './add-saldo-opereacion.page.html',
  styleUrls: ['./add-saldo-opereacion.page.scss'],
})
export class AddSaldoOpereacionPage implements OnInit {

  datos:any={
    litros:null,
    ct:''
  }
  constructor(
    public modalCtrl :ModalController,
    private _saldoOperacion: SaldoOperacionService
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  form(){
   this.postSaldo(); 
  }

  postSaldo(){
    this._saldoOperacion.createSaldoOperacion(this.datos).subscribe((data:any) =>{
      console.log(data);
    })
  }

}
