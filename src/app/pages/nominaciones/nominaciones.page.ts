import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Cell, Columns, Img, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { NominacionService } from 'src/app/services/nominacion.service';
@Component({
  selector: 'app-nominaciones',
  templateUrl: './nominaciones.page.html',
  styleUrls: ['./nominaciones.page.scss'],
})
export class NominacionesPage implements OnInit {
  datosNominacion:any=[];
  lengthNominacion = null;

  constructor(
    public modalController: ModalController,
    public navCtrl: NavController,
    private _nominacionService: NominacionService
  ) { }

  ngOnInit() {
    this.getNominacion();
  }

 addNominacion(){
  this.navCtrl.navigateForward('/nominacion')
  }

  getNominacion(){
    this._nominacionService.getNominacion().subscribe((data:any) =>{
      console.log(data);
      this.datosNominacion = data;
      this.lengthNominacion = data.length;
      
    })
  }
  

  async pdf(){
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getUTCMonth() + 1;
    let año = fecha.getFullYear();
      const pdf = new PdfMakeWrapper();
      //HEADER
      pdf.header(
        new Columns([
          
          [
            await new Img('../../../assets/icon/icon.png').
            height(80).
            width(160).
            margin([20,10]).
            build()
          ]
        
      ]).end
      
      );
  
      //TITULO
      pdf.add(
        new Txt('SISTEMA DE GESTIÓN').
        bold().
        fontSize(20).
        alignment('center').
        end
      );
      //footer
      pdf.footer(
        // new Columns(['Eduardo','Resendiz']).end
        function(currentePage,pageCount){
          return  new Columns([new Txt('Pagína' + currentePage.toString() + 'de' + pageCount).margin([30,0]).end, `© Hidromex Energy ${año}     ${dia}/${mes}/${año}`]).columnGap(10).end
        }
      );
      // background
      pdf.background(
        [
          await new Img('../../../assets/icon/icon.png').
          height(200).
          width(400).
          opacity(0.3).
          margin([200,200]).
          build()
        ]
      );
      pdf.add(
        new Table([
        [
            new Cell(new Txt(`OPERADOR`).bold().fontSize(5).alignment('center').end).fillColor('#add9ea').colSpan(3).end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(`TRACTO`).bold().fontSize(5).alignment('center').end).fillColor('#bce5cc').colSpan(3).end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(`TONEL 1`).bold().fontSize(5).alignment('center').end).fillColor('#add9ea').colSpan(3).end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(`TONEL 2`).bold().fontSize(5).alignment('center').end).fillColor('#bce5cc').colSpan(3).end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(`DATOS ESPECIFICOS`).bold().fontSize(5).alignment('center').end).fillColor('#c19672').colSpan(5).end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
            new Cell(new Txt(``).bold().fontSize(5).end).fillColor('#add9ea').end,
        ],
        [
          new Cell(new Txt(`NOMBRE`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#add9ea').alignment('center').end,
          new Cell(new Txt(`LICENCIA`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#add9ea').alignment('center').end,
          new Cell(new Txt(`Producto a Cargar`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#add9ea').alignment('center').end,
          new Cell(new Txt(`N°.DE TRACTO`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#bce5cc').alignment('center').end,
          new Cell(new Txt(`PLACA TRACTO`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#bce5cc').alignment('center').end,
          new Cell(new Txt(`TIPO (FULL/SENCILLO)`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#bce5cc').alignment('center').end,
          new Cell(new Txt(`PLACAS`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#add9ea').alignment('center').end,
          new Cell(new Txt(`CAPACIDAD`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#add9ea').alignment('center').end,
          new Cell(new Txt(`NO.ECO`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#add9ea').alignment('center').end,
          new Cell(new Txt(`PLACAS`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#bce5cc').alignment('center').end,
          new Cell(new Txt(`CAPACIDAD`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#bce5cc').alignment('center').end,
          new Cell(new Txt(`NO.ECO`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#bce5cc').alignment('center').end,
          new Cell(new Txt(`ESTACIÓN`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#c19672').alignment('center').end,
          new Cell(new Txt(`RFC`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#c19672').alignment('center').end,
          new Cell(new Txt(`DIRECCIÓN`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#c19672').alignment('center').end,
          new Cell(new Txt(`CRE`).bold().fontSize(5).decorationColor('#add9ea').end).fillColor('#c19672').alignment('center').end,
          new Cell(new Txt(`Fecha`).bold().fontSize(5).decorationColor('#968b8b').end).fillColor('#c19672').alignment('center').end,
        ]
      ]).widths([80,30,35,20,20,25,25,30,30,20,30,30,50,40,110,50,30]).margin([0,80,0,0]).end
      );
      //TABLA DINAMICA
  
      for (let i = 0; i < this.lengthNominacion; i++) {
        //console.log(this.datosNominacion,'datos nominacion');
        
         // console.log(this.datosNominacion[i].operadorId.nombre);
        pdf.add(
          new Table([
          [
              new Txt(`{this.datosNominacion[i].operadorId.nombre} {this.datosNominacion[i].operadorId.apellidos}`).bold().fontSize(5).end,
              new Txt(`{this.datosNominacion[i].operadorId.licencia}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].tipoCombustible}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].nTracto}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].placaTracto}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].tipo}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].placas1}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].capacidad1}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].nEco1}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].placas2}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].capacidad2}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].nEco2}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].empresaId.estacion}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].empresaId.rfc}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].empresaId.direccion}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].empresaId.cre}`).bold().fontSize(5).end,
              new Txt(`${this.datosNominacion[i].fecha}`).bold().fontSize(5).end,
          ]
      ]).widths([80,30,35,20,20,25,25,30,30,20,30,30,50,40,110,50,30]).end);
  
       } 
      
      pdf.pageMargins([20, 30, 30, 20]);
      pdf.pageOrientation('landscape');
      pdf.create().open(); 
    }
  
  

}
