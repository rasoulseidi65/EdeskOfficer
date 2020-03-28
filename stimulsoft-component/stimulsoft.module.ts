import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StimulsoftRoutingModule } from './stimulsoft-routing.module';
import { StimulsoftComponent } from './stimulsoft.component';

@NgModule({
  imports: [CommonModule, StimulsoftRoutingModule],
  declarations: [StimulsoftComponent]
})
export class StimulsoftModule {}
