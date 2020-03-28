import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShekaitRoutingModule } from './shekait-routing.module';
import { ServiceShekaitComponent } from './service-shekait/service-shekait.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
  declarations: [ServiceShekaitComponent],
  imports: [
    CommonModule,
    ShekaitRoutingModule,
      FormsModule,
      SharedModule,
    LayoutModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  exports:[ServiceShekaitComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ShekaitModule { }
