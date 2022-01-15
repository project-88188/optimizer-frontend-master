import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodRoutingModule } from './period-routing.module';
import { PeriodTableComponent } from './component/period-table/period-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    PeriodTableComponent
  ],
  imports: [
    CommonModule,
    PeriodRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    PeriodTableComponent
  ],
 
})
export class PeriodModule { }
