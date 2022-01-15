import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { TotaldayRoutingModule } from './totalday-routing.module';
import { TotaldayTableComponent } from './component/totalday-table/totalday-table.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    TotaldayTableComponent
  ],
  imports: [
    CommonModule,
    TotaldayRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    TotaldayTableComponent
  ],
 
})
export class TotaldayModule { }
