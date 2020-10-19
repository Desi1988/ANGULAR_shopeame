import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { HomepagePageComponent } from './pages/homepage-page/homepage-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ProductComponentComponent } from './shared/product-component/product-component.component';
import { FooterComponentComponent } from './shared/footer-component/footer-component.component';
import { MenuComponentComponent } from './shared/header-component/menu-component/menu-component.component';
import { ProductServiceService } from './shared/services/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomepagePageComponent,
    ProductPageComponent,
    ManagementPageComponent,
    ProductComponentComponent,
    FooterComponentComponent,
    MenuComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
