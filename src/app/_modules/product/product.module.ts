import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

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
