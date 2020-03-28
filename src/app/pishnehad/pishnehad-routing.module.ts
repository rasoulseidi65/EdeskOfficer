import { PishnehadBehbodComponent } from './pishnehad-behbod/pishnehad-behbod.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from '../layout/index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent,children:[{
    path:'',component:PishnehadBehbodComponent
    }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PishnehadRoutingModule { }
