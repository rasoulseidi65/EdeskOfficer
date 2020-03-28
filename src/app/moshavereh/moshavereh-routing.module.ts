import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoshaverehServiceComponent} from './moshavereh-service/moshavereh-service.component';
import {IndexComponent} from '../layout/index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent,children:[{
      path:'',component:MoshaverehServiceComponent
    }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoshaverehRoutingModule { }
