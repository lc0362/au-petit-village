import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { MentionslegalesComponent } from './mentionslegales/mentionslegales.component';

const routes: Routes = [
  {path:"", component : HomeComponent},
  {path:"about", component : AboutComponent},
  {path:"product", component : ProductComponent},
  {path:"contact", component : ContactComponent},
  {path:"mentionslegales", component : MentionslegalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
