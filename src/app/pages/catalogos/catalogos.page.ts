import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.page.html',
  styleUrls: ['./catalogos.page.scss'],
})
export class CatalogosPage implements OnInit {

  constructor(
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async operador(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Registro de Operador',
      inputs: [
        {
          name: 'nombres:',
          type: 'text',
          placeholder: 'Nombre(S):',
          // pattern: "[A-Za-z0-9!?-]{8,12}" 
        },
        {
          name: 'apellido:',
          type: 'text',
          placeholder: 'Apellido(S):',
          // pattern: "[A-Za-z0-9!?-]{8,12}" 
        },
        {
          name: 'nombres:',
          type: 'number',
          placeholder: 'Telefono:',
          // pattern: "[A-Za-z0-9!?-]{8,12}" 
        },
        {
          name: 'licencia',
          type: 'text',
          placeholder: 'Licencia:',
          // pattern: "[A-Za-z0-9!?-]{8,12}" 
        },
        {
          name: 'rfc',
          type: 'text',
          placeholder: 'RFC:',
          // pattern: "[A-Za-z0-9!?-]{8,12}" 
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async cliente(){
    
  }
  async tracto(){
    
  }

}
