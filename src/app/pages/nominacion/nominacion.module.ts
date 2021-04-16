import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominacionPageRoutingModule } from './nominacion-routing.module';

import { NominacionPage } from './nominacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominacionPageRoutingModule
  ],
  declarations: [NominacionPage]
})
export class NominacionPageModule {}
