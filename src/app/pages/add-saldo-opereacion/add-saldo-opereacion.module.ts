import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSaldoOpereacionPageRoutingModule } from './add-saldo-opereacion-routing.module';

import { AddSaldoOpereacionPage } from './add-saldo-opereacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSaldoOpereacionPageRoutingModule
  ],
  declarations: [AddSaldoOpereacionPage]
})
export class AddSaldoOpereacionPageModule {}
