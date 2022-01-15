import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { DepositRoutingModule } from './deposit-routing.module';
import { DepositTableComponent } from './component/deposit-table/deposit-table.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DepositTableComponent
  ],
  imports: [
    CommonModule,
    DepositRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    DepositTableComponent
  ],
 
})
export class DepositModule { }
