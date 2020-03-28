import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkhastRoutingModule } from './darkhast-routing.module';
import { ServiceDarkhastComponent } from './service-darkhast/service-darkhast.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {FileSelectDirective, FileUploadModule} from 'ng2-file-upload';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {NgxDocViewerModule} from 'ngx-doc-viewer';
@NgModule({
  declarations: [
    ServiceDarkhastComponent,

  ],
  imports: [
    CommonModule,
    DarkhastRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,

    ReactiveFormsModule,
    NgxDocViewerModule,
    FileUploadModule,
    PdfViewerModule,
  ],
  exports:[ServiceDarkhastComponent],
  providers: [],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DarkhastModule { }
