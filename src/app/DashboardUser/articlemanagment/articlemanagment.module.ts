
import { MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlemanagmentRoutingModule } from './articlemanagment-routing.module';
import { ArticleComponent } from './article/article.component';
import { ListarticleComponent } from './listarticle/listarticle.component';


@NgModule({
  declarations: [ArticleComponent, ListarticleComponent],
  imports: [

    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    ArticlemanagmentRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArticlemanagmentModule { }
