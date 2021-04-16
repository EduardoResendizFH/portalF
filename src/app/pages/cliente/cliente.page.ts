import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { AddClientePage } from '../add-cliente/add-cliente.page';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  readClient:any[];
  textoBuscar: string ='';

  datos:any={
    nombre:'',
    direccion:'',
    cre:'',
    permiso:'',
    vigencia:''
  }

  constructor(
    private navCtrl:NavController,
    private alerCtrl: AlertController,
    private clientService: ClienteService,
    private route: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.getCliente();
  }

  onSearchChange(event){
    this.textoBuscar = event.detail.value;
    //console.log(event.detail);
    
  }

  async newCliente(){
    const modal = await this.modalController.create({
      component: AddClientePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  getCliente(){
    this.clientService.getClient().subscribe((data:any) =>{
      console.log(data);
      this.readClient = data;
    })
  }

  delete(id:string){
    this.clientService.deleteClient(id).subscribe((data:any) =>{
      console.log(data);
    })
  }


}
