import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { ExpertRoutingModule } from './expert-routing.module';
import { ExpertTableComponent } from './component/expert-table/expert-table.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


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
    
  ],
  exports:[
    ExpertTableComponent
  ],
  
})
export class ExpertModule { }
