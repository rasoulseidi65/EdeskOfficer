import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  StimulsoftComponent} from './stimulsoft.component';


const routes: Routes = [
    { path: '', component: StimulsoftComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class StimulsoftRoutingModule { }
