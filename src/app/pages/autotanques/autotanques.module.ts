import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutotanquesPageRoutingModule } from './autotanques-routing.module';

import { AutotanquesPage } from './autotanques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutotanquesPageRoutingModule
  ],
  declarations: [AutotanquesPage]
})
export class AutotanquesPageModule {}
