import { ServiceDarkhastComponent } from './service-darkhast/service-darkhast.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from '../layout/index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent,children:[{
    path:'',component:ServiceDarkhastComponent
    }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DarkhastRoutingModule { }
