import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Cell, Columns, Img, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { SaldoOperacionService } from 'src/app/services/saldo-operacion.service';
import { AddSaldoOpereacionPage } from '../add-saldo-opereacion/add-saldo-opereacion.page';

@Component({
  selector: 'app-saldo-opereacion',
  templateUrl: './saldo-opereacion.page.html',
  styleUrls: ['./saldo-opereacion.page.scss'],
})
export class SaldoOpereacionPage implements OnInit {

  anArraySaldo:any=[];
  anArrayLitrosTotales:any=[];
  total = null;

  constructor(
    public modalController: ModalController,
    public navCtrl: NavController,
    private _saldoOperacion: SaldoOperacionService
  ) { }

  ngOnInit() {
    this.getSaldoOperacion();
  }

  async goSaldo(){
    this.navCtrl.navigateForward('/add-saldo-opereacion');
    // const modal = await this.modalController.create({
    //   component: AddSaldoOpereacionPage,
    //   cssClass: 'my-custom-class'
    // });
    // return await modal.present();
  }

  getSaldoOperacion(){
    this._saldoOperacion.getSaldoOperacion().subscribe((data:any) =>{
      this.anArraySaldo = data;
      //Mandamos llamar la funcion math para que realice las operaciones
      this._math();
    });
  }

  
  _math(){
    
    for (let i = 0; i < this.anArraySaldo.length; i++) {
    this.anArrayLitrosTotales.push(this.anArraySaldo[i].litros);
    this.total = this.anArrayLitrosTotales.reduce ((a, b) => a + b);
    //console.log(this.anArrayLitrosTotales.reduce ((a, b) => a + b), 'total');
    //console.log('mdmjdjmd');
    
    //console.log(this.anArraySaldo[i].litros,'litros');
    //console.log(this.anArraySaldo[i].updatedAt.substr(0, 10));
    }
    console.log(this.total);
    
    
  }

 async pdf(){
   console.log(this.total);
   
    
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
        new Txt('SALDO OPERACIÓN').
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
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(`VENTAS {NOMBRE CLIENTE}`).alignment('center').end).fillColor('#5396fc').colSpan(3).end,
            new Cell(new Txt(``).end).fillColor('#e57b19').end,
            new Cell(new Txt(``).end).fillColor('#e57b19').end,
            new Cell(new Txt(`COSTOS {BSQ}`).alignment('center').end).fillColor('#e57b19').colSpan(2).end,
            new Cell(new Txt(``).end).fillColor('#e57b19').end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
          ],
          [
            new Cell(new Txt(`FECHA`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#e57b19').end,
            new Cell(new Txt(`NO.BOL`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#e57b19').end,
            new Cell(new Txt(`LITROS`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#e57b19').end,
            new Cell(new Txt(`CT`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#e57b19').end,
            new Cell(new Txt(`FACTURA HIDROMEX`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#5396fc').end,
            new Cell(new Txt(`VENTA`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#5396fc').end,
            new Cell(new Txt(`ESTATUS FACTURA`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#5396fc').end,
            new Cell(new Txt(`PRECIO POR LITRO`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#09090a').end,
            new Cell(new Txt(`COSTO`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#09090a').end,
            new Cell(new Txt(`PAGADO`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#e57b19').end,
            new Cell(new Txt(`SALDO`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#e57b19').end,
            new Cell(new Txt(`SALDO LITROS`).bold().fontSize(7).alignment('center').color('#fcf7f7').end).fillColor('#e57b19').end,
          ]
        ]).widths([40,60,60,60,60,60,60,60,60,60,60,60]).margin([0,80,0,0]).end
      );

      for (let i = 0; i < this.anArraySaldo.length; i++) {
          pdf.add(
            new Table([
              [
                new Cell(new Txt(`${this.anArraySaldo[i].createdAt.substr(0, 10)}`).fontSize(7).end).end,
                new Cell(new Txt(`${i + 1}`).fontSize(7).alignment('center').end).end,
                new Cell(new Txt(`${this.anArraySaldo[i].litros}`).fontSize(7).alignment('center').end).end,
                new Cell(new Txt(`${this.anArraySaldo[i].ct}`).fontSize(7).alignment('center').end).end,
                new Cell(new Txt(``).end).end,
                new Cell(new Txt(``).end).end,
                new Cell(new Txt(``).end).end,
                new Cell(new Txt(``).end).end,
                new Cell(new Txt(``).end).end,
                new Cell(new Txt(``).end).end,
                new Cell(new Txt(``).end).end,
                new Cell(new Txt(``).end).end,
              ]
            ]).widths([40,60,60,60,60,60,60,60,60,60,60,60]).end
          )
      } 

      pdf.add(
        new Table([
          [
            new Cell(new Txt(`TOTALES`).fontSize(7).alignment('center').end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(`${this.total}`).fontSize(7).alignment('center').end).border([false,false,false,false]).end,
            new Cell(new Txt(``).fontSize(7).alignment('center').end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
            new Cell(new Txt(``).end).border([false,false,false,false]).end,
          ]
        ]).widths([40,60,60,60,60,60,60,60,60,60,60,60]).end
      )

    pdf.pageMargins([20, 30, 30, 20]);
    pdf.pageOrientation('landscape');
    pdf.create().open(); 
    
  }

}
