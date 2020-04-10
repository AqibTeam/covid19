import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvincesPageRoutingModule } from './provinces-routing.module';

import { ProvincesPage } from './provinces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvincesPageRoutingModule
  ],
  declarations: [ProvincesPage]
})
export class ProvincesPageModule {}
