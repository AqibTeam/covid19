import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoviDetailsPageRoutingModule } from './covi-details-routing.module';

import { CoviDetailsPage } from './covi-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoviDetailsPageRoutingModule
  ],
  declarations: [CoviDetailsPage]
})
export class CoviDetailsPageModule {}
