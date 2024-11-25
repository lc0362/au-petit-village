import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  title = 'Figurine';
  isModalOpen = false; 
  currentImage = ''; 
  currentProduct: any = null; 
  relatedProducts: any[] = []; 
  displayedProducts: any[] = []; 
  currentIndex = 0; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = +params.get('id')!;
      this.loadProduct(productId);
    });

    window.addEventListener('resize', () => this.updateDisplayedProducts());
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.updateDisplayedProducts());
  }

  loadProduct(productId: number): void {
    this.http.get<any[]>('assets/products.json').subscribe((products) => {
      this.currentProduct = products.find((product) => product.id === productId);

      if (!this.currentProduct) {
        console.error(`Produit avec l'ID ${productId} introuvable.`);
        return;
      }

      this.relatedProducts = products.filter((product) => product.id !== productId);
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

  updateDisplayedProducts(): void {
    const productsPerView = window.innerWidth <= 768 ? 1 : 2;
    this.displayedProducts = this.relatedProducts.slice(
      this.currentIndex,
      this.currentIndex + productsPerView
    );

    if (this.displayedProducts.length < productsPerView) {
      this.displayedProducts = this.displayedProducts.concat(
        this.relatedProducts.slice(0, productsPerView - this.displayedProducts.length)
      );
    }
  }

  nextProducts(): void {
    this.currentIndex = (this.currentIndex + 1) % this.relatedProducts.length;
    this.updateDisplayedProducts();
  }

  previousProducts(): void {
    const productsPerView = window.innerWidth <= 768 ? 1 : 2;
    this.currentIndex =
      (this.currentIndex - productsPerView + this.relatedProducts.length) % this.relatedProducts.length;
    this.updateDisplayedProducts();
  }
}
