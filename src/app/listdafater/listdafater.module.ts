import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListdafaterRoutingModule } from './listdafater-routing.module';
import { ListdafaterComponent } from './listdafater/listdafater.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {MosharekatServiceComponent} from '../mosharekat/mosharekat-service/mosharekat-service.component';

@NgModule({
  declarations: [ListdafaterComponent],
  imports: [
    CommonModule,
    ListdafaterRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  exports:[ListdafaterComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ListdafaterModule { }
