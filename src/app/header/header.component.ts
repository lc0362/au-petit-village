import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Corrected to 'styleUrls'
})
export class HeaderComponent implements OnInit {
  
  ngOnInit(): void {
    this.initApp();
  }

  initApp(): void {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerBtn && mobileMenu) {
      const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn')
      };

      hamburgerBtn.addEventListener('click', toggleMenu);
      mobileMenu.addEventListener('click', toggleMenu);
    }
  }
}
