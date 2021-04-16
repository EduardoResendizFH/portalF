import { Component, OnInit } from '@angular/core';
import { AutotanquesService } from 'src/app/services/autotanques.service';

@Component({
  selector: 'app-autotanques-watch',
  templateUrl: './autotanques-watch.page.html',
  styleUrls: ['./autotanques-watch.page.scss'],
})
export class AutotanquesWatchPage implements OnInit {
  datos:any=[];
  listaTotalCapacidad:any=[];
  listaTotalPesoTara:any=[];
  lista:number[]=[];
  totalCapacidad:any=[];
  totalCapacidadString:any=[];
  totalPesoTara:any = [];
  totalPesoTaraString:any = [];

  constructor(
    private _autotanqueService: AutotanquesService
  ) { }

  ngOnInit() {
    this.getAutotanques();
  }

  getAutotanques(){
    this._autotanqueService.getAutotanque().subscribe((data:any) =>{
      //console.log(data);
      this.datos = data;
      
      
      //For para limitar cuanto rrecorrer el array
      for (let i = 0; i <= 30; i++) {
        this.lista.push(i);
      } 
      
      for (let index = 0; index < this.datos.length; index++) {
        this.listaTotalCapacidad.push(this.datos[index].capacidad);
        this.listaTotalPesoTara.push(this.datos[index].pesoTara);
        //console.log(this.listaTotalCapacidad, this.listaTotalPesoTara);
        
      }
     
      
      for (let indx = 0; indx < this.listaTotalCapacidad.length; indx++) {
        this.totalCapacidad = this.listaTotalCapacidad[indx].reduce((a, b) => a + b, );
        this.totalPesoTara = this.listaTotalPesoTara[indx].reduce((a, b) => a + b, );
        this.totalCapacidadString.push( this.totalCapacidad.toString());
        this.totalPesoTaraString.push( this.totalPesoTara.toString());
      }
    })
  }

}
