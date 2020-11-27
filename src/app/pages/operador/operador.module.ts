import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperadorPageRoutingModule } from './operador-routing.module';

import { OperadorPage } from './operador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperadorPageRoutingModule
  ],
  declarations: [OperadorPage]
})
export class OperadorPageModule {}
