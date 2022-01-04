import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MarketProductCardsListComponent } from './components/market-product-cards-list/market-product-cards-list.component';
import { UserProductCardsListComponent } from './components/user-product-cards-list/user-product-cards-list.component';
import { AdminProductsManagerComponent } from './components/admin-products-manager/admin-products-manager.component';


@NgModule({
  declarations: [
    AddProductComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    MarketProductCardsListComponent,
    UserProductCardsListComponent,
    AdminProductsManagerComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    AddProductComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    MarketProductCardsListComponent,
    UserProductCardsListComponent,
    AdminProductsManagerComponent,
  ]
})

export class ProductModule { }
