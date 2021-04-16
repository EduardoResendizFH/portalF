import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NominacionPage } from './nominacion.page';

const routes: Routes = [
  {
    path: '',
    component: NominacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominacionPageRoutingModule {}
