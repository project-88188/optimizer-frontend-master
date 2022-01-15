import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyTableComponent } from './component/currency-table/currency-table.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
  ],
  exports:[
    CurrencyTableComponent
  ],
 
})
export class CurrencyModule { }
