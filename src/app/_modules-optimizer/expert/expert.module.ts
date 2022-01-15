import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertRoutingModule } from './expert-routing.module';
import { ExpertTableComponent } from './component/expert-table/expert-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExpertTableComponent
  ],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
    
  ],
  exports:[
    ExpertTableComponent
  ],
  
})
export class ExpertModule { }
