import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoviDetailsPage } from './covi-details.page';

const routes: Routes = [
  {
    path: '',
    component: CoviDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoviDetailsPageRoutingModule {}
