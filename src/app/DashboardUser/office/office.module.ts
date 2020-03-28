import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import {OfficeComponent} from './office.component';

@NgModule({
  declarations: [OfficeComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OfficeModule { }
