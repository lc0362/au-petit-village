import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Corrigé : "styleUrl" devient "styleUrls"
})
export class ContactComponent {
  title = "Contact";

  formData = {
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
  };

  onSubmit() {
    console.log('Formulaire soumis avec les données suivantes :', this.formData);
    alert('Votre message a été envoyé avec succès !');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
    };
  }
}
