import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradingparameterRoutingModule } from './tradingparameter-routing.module';
import { TradingparameterTableComponent } from './component/tradingparameter-table/tradingparameter-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';



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
    FormsModule
  ],
  exports:[
    TradingparameterTableComponent
  ],
  
})
export class TradingparameterModule { }
