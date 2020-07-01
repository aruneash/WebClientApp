import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    SliderComponent,
    ProductDetailsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'category', component: CategoryComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/:id', component: CategoriesComponent },
      
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
