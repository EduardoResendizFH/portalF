import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSaldoOpereacionPage } from './add-saldo-opereacion.page';

const routes: Routes = [
  {
    path: '',
    component: AddSaldoOpereacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSaldoOpereacionPageRoutingModule {}
