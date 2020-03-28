import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from '../layout/index/index.component';
import {ListdafaterComponent} from './listdafater/listdafater.component';

const routes: Routes = [
  {path:'',component:IndexComponent,children:[
      {path:'',component:ListdafaterComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListdafaterRoutingModule { }
