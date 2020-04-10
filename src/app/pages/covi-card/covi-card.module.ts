import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoviCardPageRoutingModule } from './covi-card-routing.module';

import { CoviCardPage } from './covi-card.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    CoviCardPageRoutingModule
  ],
  declarations: [CoviCardPage]
})
export class CoviCardPageModule {}
