import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyTableComponent } from './component/currency-table/currency-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CurrencyTableComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
     MatProgressSpinnerModule,
  ],
  exports:[
    CurrencyTableComponent
  ],
 
})
export class CurrencyModule { }
