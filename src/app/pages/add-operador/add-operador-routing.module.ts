import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOperadorPage } from './add-operador.page';

const routes: Routes = [
  {
    path: '',
    component: AddOperadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOperadorPageRoutingModule {}
