import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOperadorPageRoutingModule } from './add-operador-routing.module';

import { AddOperadorPage } from './add-operador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOperadorPageRoutingModule
  ],
  declarations: [AddOperadorPage]
})
export class AddOperadorPageModule {}
