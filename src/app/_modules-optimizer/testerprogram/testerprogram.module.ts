import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesterprogramRoutingModule } from './testerprogram-routing.module';
import { TesterprogramTableComponent } from './component/testerprogram-table/testerprogram-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TesterprogramTableComponent
  ],
  imports: [
    CommonModule,
    TesterprogramRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
   
  ],
  exports:[
    TesterprogramTableComponent,
  ],
 
})
export class TesterprogramModule { }
