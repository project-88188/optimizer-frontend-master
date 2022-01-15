import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { ProductcommentRoutingModule } from './productcomment-routing.module';
import { AdminProductcommentsManagerComponent } from './components/admin-productcomments-manager/admin-productcomments-manager.component';


@NgModule({
  declarations: [
    AdminProductcommentsManagerComponent
  ],
  imports: [
    CommonModule,
    ProductcommentRoutingModule
  ]
})
export class ProductcommentModule { }
