import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  componentes:any[] =[
    {
      icon: 'albums-outline',
      name: 'Catalogos',
      redirectTo: '/catalogos'
    },
    {
      icon: 'reader-outline',
      name: 'Nominacion',
      redirectTo: '/nominaciones'
    },
    {
      icon: 'water-outline',
      name: 'Productos',
      redirectTo: '/productos'
    },
    {
      icon: 'card-outline',
      name: 'Saldo Operacion',
      redirectTo: '/saldo-opereacion'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl:NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
