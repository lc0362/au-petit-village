import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { MentionslegalesComponent } from './mentionslegales/mentionslegales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    MentionslegalesComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule, 
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
