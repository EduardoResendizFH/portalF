import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaldoOpereacionPageRoutingModule } from './saldo-opereacion-routing.module';

import { SaldoOpereacionPage } from './saldo-opereacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaldoOpereacionPageRoutingModule
  ],
  declarations: [SaldoOpereacionPage]
})
export class SaldoOpereacionPageModule {}
