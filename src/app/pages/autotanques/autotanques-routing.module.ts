import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutotanquesPage } from './autotanques.page';

const routes: Routes = [
  {
    path: '',
    component: AutotanquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutotanquesPageRoutingModule {}
