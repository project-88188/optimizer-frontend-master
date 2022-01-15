import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterresultRoutingModule } from './testerresult-routing.module';
import { TesterresultTableComponent } from './component/testerresult-table/testerresult-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TesterresultTableComponent
  ],
  imports: [
    CommonModule,
    TesterresultRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
   
  ],
  exports:[
    TesterresultTableComponent
  ],
 
})
export class TesterresultModule { }
