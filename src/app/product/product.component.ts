import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title = 'Figurine';
  isModalOpen = false; // État de la modal par défaut
  currentImage = ''; // Image à afficher dans la modal, valeur initiale

  currentProductId = 1; // ID du produit actuel
  relatedProducts: any[] = []; // Tous les produits liés
  displayedProducts: any[] = []; // Produits actuellement affichés
  currentIndex = 0; // Index de départ pour l'affichage des produits

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Chargement des produits depuis products.json
  loadProducts(): void {
    this.http.get<any[]>('assets/products.json').subscribe((products) => {
      this.relatedProducts = products.filter((product) => product.id !== this.currentProductId);
      this.updateDisplayedProducts();
    });
  }

  openModal(image: string): void {
    this.isModalOpen = true;
    this.currentImage = image;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.currentImage = '';
  }

  // Mise à jour des produits affichés
  updateDisplayedProducts(): void {
    const productsPerView = window.innerWidth <= 768 ? 1 : 2; // 1 produit ou 2 à partir de la taille tablette
    this.displayedProducts = this.relatedProducts.slice(
      this.currentIndex,
      this.currentIndex + productsPerView
    );

    // Si moins de produits disponibles, compléter avec le début
    if (this.displayedProducts.length < productsPerView) {
      this.displayedProducts = this.displayedProducts.concat(
        this.relatedProducts.slice(0, productsPerView - this.displayedProducts.length)
      );
    }
  }

  // Affiche le produit suivant
  nextProducts(): void {
    this.currentIndex = (this.currentIndex + 1) % this.relatedProducts.length; // Avancer de 1 au clic
    this.updateDisplayedProducts();
  }

  // Affiche le produit précédent
  previousProducts(): void {
    const productsPerView = window.innerWidth <= 768 ? 1 : 2; // 1 produit ou 2 à partir de la taille tablette

    // Recule de `productsPerView` dans l'index
    this.currentIndex =
      (this.currentIndex - productsPerView + this.relatedProducts.length) % this.relatedProducts.length;

    this.updateDisplayedProducts();
  }
}
