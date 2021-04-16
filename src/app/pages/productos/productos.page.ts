import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
    datosTurbosina:any=[];
    datosGasolina:any=[];
    datosDieselAu:any=[];
    datosDieselDuba:any=[];
    datosProductos:any=[];
 
  constructor(
      private _productoService: ProductsService 
  ) { }

  ngOnInit() {
      this.getGasolinaRegular();
      this.getDiesel();
      this.getDieselDuba();
      this.getTurbosina();
    
  }

  getGasolinaRegular(){
      this._productoService.getProductoGasolina().subscribe((data:any) =>{
        //   console.log(data);
          this.datosGasolina = data;
      })
  }

//   getGasolinaPremium(){
//       this._productoService.().subscribe((data:any) =>{
//           console.log(data);
//       })
//   }
  getDiesel(){
      this._productoService.getProductoDieselAu().subscribe((data:any) =>{
        //   console.log(data);
          this.datosDieselAu = data;
      })
  }

  getDieselDuba(){
      this._productoService.getProductoDieselDuba().subscribe((data:any) =>{
        //   console.log(data);
          this.datosDieselDuba = data;
      })
  }

  getTurbosina(){
      this._productoService.getProductoTurbosina().subscribe((data:any) =>{
        //   console.log(data);
          this.datosTurbosina = data;
      })
  }

}
