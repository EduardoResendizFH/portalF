import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { NominacionService } from 'src/app/services/nominacion.service';
import { OperadorService } from 'src/app/services/operador.service';

@Component({
  selector: 'app-nominacion',
  templateUrl: './nominacion.page.html',
  styleUrls: ['./nominacion.page.scss'],
})
export class NominacionPage implements OnInit {

  datosOperador:any=[];
  datosEmpresa:any=[];
  
  idOperador = "";
  getOperadorId:any ={};

  idEmpresa = "";
  getEmpresaId:any ={};
  
  datos:any ={
    nTracto : "",
    fecha:'',
    tipoCombustible:'',
    placaTracto : "",
    tipo: "",
    placa1 : "",
    capacidad1: "",
    nEco1:"",
    placa2 : "",
    capacidad2: "",
    nEco2:"",
    empresaId: "",
    operadorId: ""
  }

  constructor(
    public modalCtrl: ModalController,
    private operadorService: OperadorService,
    private clienteService: ClienteService,
    private _nominacionService: NominacionService
    //private nominacionService: NominacionS
  ) { }

  ngOnInit() {
    this.getOperador();
    this.getCliente();
  }


  getOperador(){
    this.operadorService.getOperador().subscribe((data:any) =>{
     // console.log(data);
      this.datosOperador = data;
    });
  }

  getCliente(){
    this.clienteService.getClient().subscribe((data:any) =>{
      //console.log(data);
      this.datosEmpresa = data;
    })
  }

  changeOperador(event) {
    this.idOperador = event.target.value;
    //console.log(this.idOperador);
   this.getOperadorById();
  }
  changeEmpresa(event){
    this.idEmpresa = event.target.value;
    //console.log(this.idEmpresa);
    this.getClienteById();
  }

  getOperadorById(){
    this.operadorService.getOperadorById(this.idOperador).subscribe((data: any) =>{
      console.log(data,'Operador id');
      this.datos.operadorId = data._id;
      this.getOperadorId = data;
    })
  }

  getClienteById(){
    this.clienteService.getClientById(this.idEmpresa).subscribe((data:any) =>{
      console.log(data, 'cliente id');
      this.datos.empresaId = data._id;
      this.getEmpresaId = data;
    })
  }

  enviarForm(form){
    this._nominacionService.createNominacion(this.datos).subscribe((data:any) =>{
      console.log(data);
    });
  }
}
