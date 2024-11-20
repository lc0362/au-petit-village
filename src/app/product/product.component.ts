import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
title="Figurine";
isModalOpen = false; // État de la modal par défaut
currentImage = ''; // Image à afficher dans la modal

openModal(image: string) {
  this.isModalOpen = true;
  this.currentImage = image;
}

closeModal() {
  this.isModalOpen = false;
  this.currentImage = '';
}
}
