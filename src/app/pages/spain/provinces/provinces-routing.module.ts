import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvincesPage } from './provinces.page';

const routes: Routes = [
  {
    path: '',
    component: ProvincesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvincesPageRoutingModule {}
