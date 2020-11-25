import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  products:any=[];

  constructor(
    private _productsService: ProductsService
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

}
