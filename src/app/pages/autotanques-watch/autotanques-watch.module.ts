import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutotanquesWatchPageRoutingModule } from './autotanques-watch-routing.module';

import { AutotanquesWatchPage } from './autotanques-watch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutotanquesWatchPageRoutingModule
  ],
  declarations: [AutotanquesWatchPage]
})
export class AutotanquesWatchPageModule {}
