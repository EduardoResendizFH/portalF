import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominacionesPageRoutingModule } from './nominaciones-routing.module';

import { NominacionesPage } from './nominaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominacionesPageRoutingModule
  ],
  declarations: [NominacionesPage]
})
export class NominacionesPageModule {}
