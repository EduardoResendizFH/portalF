import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperadorPage } from './operador.page';

const routes: Routes = [
  {
    path: '',
    component: OperadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperadorPageRoutingModule {}
