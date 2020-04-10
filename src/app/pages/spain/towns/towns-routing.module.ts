import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TownsPage } from './towns.page';

const routes: Routes = [
  {
    path: '',
    component: TownsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TownsPageRoutingModule {}
