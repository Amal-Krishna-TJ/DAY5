import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"aboutus",component:AboutComponent},
    {path:"products",component:ProductsComponent},
    {path:"contactus",component:ContactComponent},
];
