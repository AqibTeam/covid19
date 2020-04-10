import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoviTablePage } from './covi-table.page';

const routes: Routes = [
  {
    path: '',
    component: CoviTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoviTablePageRoutingModule {}
