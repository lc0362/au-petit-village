import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title = 'Figurine';
  isModalOpen = false; 
  currentImage = ''; 
  currentProduct: any = null; 
  relatedProducts: any[] = []; 
  displayedProducts: any[] = []; 
  currentIndex = 0; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Récupère l'ID depuis l'URL et charge le produit correspondant
    this.route.paramMap.subscribe((params) => {
      const productId = +params.get('id')!; // Converti en nombre
      this.loadProduct(productId);
    });
  }

  // Charge le produit et les produits recommandés
  loadProduct(productId: number): void {
    this.http.get<any[]>('assets/products.json').subscribe((products) => {
      // Trouver le produit correspondant
      this.currentProduct = products.find((product) => product.id === productId);

      // Filtrer les produits sans le produit actuellement affiché
      this.relatedProducts = products.filter((product) => product.id !== productId);

      // Mettre à jour l'affichage des produits recommandés
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

  // Met à jour les produits recommandés affichés
  updateDisplayedProducts(): void {
    const productsPerView = window.innerWidth <= 768 ? 1 : 2; // 1 produit ou 2 selon la taille de l'écran
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

  // Passe au produit suivant
  nextProducts(): void {
    this.currentIndex = (this.currentIndex + 1) % this.relatedProducts.length;
    this.updateDisplayedProducts();
  }

  // Passe au produit précédent
  previousProducts(): void {
    const productsPerView = window.innerWidth <= 768 ? 1 : 2;
    this.currentIndex =
      (this.currentIndex - productsPerView + this.relatedProducts.length) % this.relatedProducts.length;
    this.updateDisplayedProducts();
  }
}
