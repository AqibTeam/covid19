import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TownsPageRoutingModule } from './towns-routing.module';

import { TownsPage } from './towns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TownsPageRoutingModule
  ],
  declarations: [TownsPage]
})
export class TownsPageModule {}
