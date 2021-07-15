import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  supprimerArticle: any;
  addArticle(newArticle: Produit) {
    throw new Error('Method not implemented.');
  }

  produits!: Produit[];

  produit!: Produit;


  constructor() {
    this.produits = [
      { idArticle: 1, nomArticle: "EUR/USD", referenceArticle: "By DAVID MARCEL le 12/07/2021", descriptionArticle: "Nouveaux Gains en vue sur l’Euro Dollar..." },
      { idArticle: 2, nomArticle: "Action Atos", referenceArticle: "By PIERRE PERRIN-MONLOUIS le 12/07/2021", descriptionArticle: "Le cours de l’action Atos décroche brutalement ce lundi..." },
      { idArticle: 3, nomArticle: "Bitcoin ?", referenceArticle: "By ROMAIN BOYER le 12/07/2021", descriptionArticle: "Alors que les cryptomonnaies se démocratisent au plus grand nombre..." }
    ];
  }

  listArticles(): Produit[] {
    return this.produits;
  }

  addProduit(produit: Produit) {
    this.produits.push(produit);
  }

  supprimerProduit(prod: Produit) {
    const index = this.produits.indexOf(prod, 0); if (index > -1) {
      this.produits.splice(index, 1);
    }
  }

  consulterProduit(id: number): Produit {
    this.produit = this.produits.find(p => p.idArticle == id) as Produit;
    return this.produit;
  }

  updateProduit(p: Produit) {
    this.supprimerProduit(p);
    this.addProduit(p);
  }
}