import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = "Au Petit Village";
  products: any[] = [];
  sortOrder = 'default'; // ordre par défaut

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
      this.products = data;
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  }
}
