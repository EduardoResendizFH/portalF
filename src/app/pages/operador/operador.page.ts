import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OperadorService } from 'src/app/services/operador.service';
import { AddOperadorPage } from '../add-operador/add-operador.page';
@Component({
  selector: 'app-operador',
  templateUrl: './operador.page.html',
  styleUrls: ['./operador.page.scss'],
})
export class OperadorPage implements OnInit {
  arrayOperadores= [];

  readClient:any[];
  textoBuscar: string ='';

  constructor(
    private modalController: ModalController,
    private operadorService: OperadorService
  ) { }

  ngOnInit() {
    this.getOperadores();
  }
  
  onSearchChange(event){
    this.textoBuscar = event.detail.value;
    //console.log(event.detail);
    
  }

  getOperadores(){
    this.operadorService.getOperador().subscribe((data:any) =>{
       console.log(data);
      this.arrayOperadores = data;
    });
  }

  deleteOperador(id:string){
   // console.log(id);
    this.operadorService.deleteOperador(id).subscribe((data:any) =>{
      console.log(data);
      
    })
  }
  
  async addOperador(){
    const modal = await this.modalController.create({
      component: AddOperadorPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
