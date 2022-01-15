import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotaldayRoutingModule } from './totalday-routing.module';
import { TotaldayTableComponent } from './component/totalday-table/totalday-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
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
