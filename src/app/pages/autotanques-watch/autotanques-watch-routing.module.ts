import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutotanquesWatchPage } from './autotanques-watch.page';

const routes: Routes = [
  {
    path: '',
    component: AutotanquesWatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutotanquesWatchPageRoutingModule {}
