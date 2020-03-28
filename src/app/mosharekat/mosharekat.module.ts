import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MosharekatRoutingModule } from './mosharekat-routing.module';
import { MosharekatServiceComponent } from './mosharekat-service/mosharekat-service.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  declarations: [MosharekatServiceComponent],
  imports: [
    CommonModule,
    MosharekatRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  exports:[MosharekatServiceComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class MosharekatModule { }
