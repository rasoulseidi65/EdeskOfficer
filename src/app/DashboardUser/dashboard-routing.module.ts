import { ContentDahboardComponent } from "./content-dahboard/content-dahboard.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: ContentDahboardComponent
      }
    ]
  },
  {
    path: "city",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren: "./city/city.module#CityModule"
      }
    ]
  },
  {
    path: "listarticle",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./articlemanagment/articlemanagment.module#ArticlemanagmentModule"
      }
    ]
  },
  {
    path: "office",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./office/office.module#OfficeModule"
      }
    ]
  },
  {
    path: "province",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./province/province.module#ProvinceModule"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
