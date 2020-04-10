import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoviTablePageRoutingModule } from './covi-table-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoviTablePage } from './covi-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoviTablePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [CoviTablePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CoviTablePageModule {}
