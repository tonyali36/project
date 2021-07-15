import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html'
})
export class AddArticleComponent implements OnInit {

  newArticle = new Produit();
  message!: string;

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
  }

  addProduit(){
    this.produitService.addProduit(this.newArticle);
    this.message = "Article " + this.newArticle.nomArticle + " ajouté avec succès.";
  }
}