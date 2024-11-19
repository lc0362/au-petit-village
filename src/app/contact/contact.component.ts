import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  title = 'Contact';
  formData = {
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: '',
  };

  showError = false; 
  faqState = [false, false, false, false, false]; // les réponses FAQ sont ne sont pas affichées par défaut donc état false au départ

  toggleFaq(index: number) { // méthode toggle pour basculer de vrai à faux en fonction de si la question est cliquée. Le paramètre index représente la question cliquée (de 0 à 4 dans le html) 
    this.faqState[index] = !this.faqState[index]; 
  }

  onSubmit() { // méthode onSubmit, si un des champs est vide au moment de soumettre le formulaire alors le showError passe à true
    if (
      !this.formData.nom ||
      !this.formData.prenom ||
      !this.formData.telephone ||
      !this.formData.email ||
      !this.formData.message
    ) {
      this.showError = true; 
      return;
    }

    alert('Votre message a bien été envoyé !');

    this.formData = {
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
      message: '',
    }; 
    this.showError = false; 
  }
}

