import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
  {path: "add-article", component : AddArticleComponent},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: "", redirectTo: "produits", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

