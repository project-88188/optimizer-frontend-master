import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymbolRoutingModule } from './symbol-routing.module';
import { SymbolTableComponent } from './component/symbol-table/symbol-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    SymbolTableComponent
  ],
  imports: [
    CommonModule,
    SymbolRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,

  ],
  exports:[
    SymbolTableComponent
  ],
 
})
export class SymbolModule { }
