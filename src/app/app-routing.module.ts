import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomepagePageComponent } from './pages/homepage-page/homepage-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepagePageComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'management', component: ManagementPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
