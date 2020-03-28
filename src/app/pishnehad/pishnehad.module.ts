import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PishnehadRoutingModule } from './pishnehad-routing.module';
import { PishnehadBehbodComponent } from './pishnehad-behbod/pishnehad-behbod.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
  declarations: [PishnehadBehbodComponent],
  imports: [
    CommonModule,
    PishnehadRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  exports:[PishnehadBehbodComponent]
})
export class PishnehadModule { }
