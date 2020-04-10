import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoviCardPage } from './covi-card.page';

const routes: Routes = [
  {
    path: '',
    component: CoviCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoviCardPageRoutingModule {}
