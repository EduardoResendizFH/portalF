import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  products:any=[];

  constructor(
    private _productsService: ProductsService,
    public navCtrl: NavController,
    public menu:MenuController
  ) { }

  ngOnInit() {
    // const token = localStorage.getItem('token');
    // console.log(token,'Token de la pagina de inicio');
    this.getProducts();
  }

  getProducts(){
    this._productsService.getProducts().subscribe((data:any) =>{
      console.log(data);
      this.products = data;
    });
  }

  delete(id){
    this._productsService.deleteProducts(id).subscribe((data:any) =>{
      console.log(data);
    })
  }


  openMenu(){
    this.menu.open();
  }
  
  navempresa(){
    this.navCtrl.navigateForward('/empresa');
  }

  operador(){
    this.navCtrl.navigateForward('/operador');
  }

  navproducto(){
    this.navCtrl.navigateForward('/producto');
  }

  navTren(){
    this.navCtrl.navigateForward('/tren');
  }

}
