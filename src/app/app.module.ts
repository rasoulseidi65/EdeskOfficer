
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import {CommonModule} from '@angular/common';

import { EditorModule } from '@tinymce/tinymce-angular';

import { NgxSpinnerModule } from 'ngx-spinner';

import { NgxFabModule } from 'ngx-fab';



import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {LayoutModule} from './layout/layout.module';
import { ZoneComponent } from './DashbourdUser/zone/zone/zone.component';


@NgModule({
  declarations: [
    AppComponent,
      NavigationComponent,


    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MatPaginatorModule,
    FormsModule,
    NgxSpinnerModule,
    NgxFabModule,

    EditorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    LayoutModule

  ],
  exports:[],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
