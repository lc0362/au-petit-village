import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = "Au Petit Village";
  allProducts: any[] = []; // Tous les produits non filtrés
  products: any[] = []; // Produits filtrés affichés
  sortOrder = 'default'; // Ordre par défaut
  searchQuery = ''; // Requête de recherche

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    try {
      const url = this.location.prepareExternalUrl('assets/products.json');
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      this.allProducts = data;
      this.updateProducts(); // Initialiser les produits affichés
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  }

  updateProducts() {
    // Filtrer par recherche
    let filteredProducts = this.allProducts.filter((product) =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    // Appliquer le tri
    this.products = [...filteredProducts]; // Copie pour éviter de modifier allProducts
  }
}