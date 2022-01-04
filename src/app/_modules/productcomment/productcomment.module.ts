import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
