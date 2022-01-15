import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { LeverageRoutingModule } from './leverage-routing.module';
import { LeverageTableComponent } from './component/leverage-table/leverage-table.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    LeverageTableComponent
  ],
  imports: [
    CommonModule,
    LeverageRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    LeverageTableComponent
  ],
  
})
export class LeverageModule { }
