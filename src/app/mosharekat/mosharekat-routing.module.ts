import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MosharekatServiceComponent} from './mosharekat-service/mosharekat-service.component';
import {IndexComponent} from '../layout/index/index.component';

const routes: Routes = [
{path:'',component:IndexComponent,children:[
    {path:'',component:MosharekatServiceComponent}]}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MosharekatRoutingModule { }
