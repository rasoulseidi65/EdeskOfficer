
import { ListarticleComponent } from "./listarticle/listarticle.component";
import { ArticleComponent } from "./article/article.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [

  {
    path: "listarticle",
    component: ListarticleComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlemanagmentRoutingModule {}
