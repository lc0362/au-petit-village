import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title = 'Au Petit Village';
  allProducts: any[] = [];
  products: any[] = [];
  sortOrder = 'default';
  searchQuery = '';

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    try {
      const url = this.location.prepareExternalUrl('assets/products.json');
      console.log('URL utilisée pour les produits :', url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Produits récupérés :', data);
      this.products = data; // Remplit directement les produits
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  }
}
