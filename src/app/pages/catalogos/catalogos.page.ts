import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.page.html',
  styleUrls: ['./catalogos.page.scss'],
})
export class CatalogosPage implements OnInit {

  catalogos:any[]=[
    {
      name:'Operador',
      icon: 'car-outline',
      redirectTo: '/operador'
    },
    {
      name:'Cliente',
      icon: 'people-outline',
      redirectTo: '/cliente'
    },
    {
      name:'Autotanques',
      icon: 'watch-outline',
      redirectTo: '/autotanques'
    }
  ];

  constructor(
    public alertCtrl: AlertController,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // const id = this.activateRoute.snapshot.paramMap.get('custom_id');
    // console.log(id);
  }
}
