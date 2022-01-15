import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { TradingparameterRoutingModule } from './tradingparameter-routing.module';
import { TradingparameterTableComponent } from './component/tradingparameter-table/tradingparameter-table.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    TradingparameterTableComponent
  ],
  imports: [
    CommonModule,
    TradingparameterRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
   
  ],
  exports:[
    TradingparameterTableComponent
  ],
  
})
export class TradingparameterModule { }
