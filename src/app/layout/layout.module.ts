
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { IndexComponent } from './index/index.component';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Mainbody2Component } from './mainbody2/mainbody2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {MainbodyComponent} from './mainbody/mainbody.component';
import {HeaderComponent} from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [IndexComponent,Mainbody2Component,MainbodyComponent,HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports:[IndexComponent,Mainbody2Component,MainbodyComponent,HeaderComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class LayoutModule { }
