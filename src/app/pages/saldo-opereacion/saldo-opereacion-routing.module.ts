import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaldoOpereacionPage } from './saldo-opereacion.page';

const routes: Routes = [
  {
    path: '',
    component: SaldoOpereacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaldoOpereacionPageRoutingModule {}
