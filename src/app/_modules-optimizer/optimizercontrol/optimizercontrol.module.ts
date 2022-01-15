import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { OptimizercontrolRoutingModule } from './optimizercontrol-routing.module';
import { OptimizercontrolTableComponent } from './component/optimizercontrol-table/optimizercontrol-table.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    OptimizercontrolTableComponent
  ],
  imports: [
    CommonModule,
    OptimizercontrolRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
   
  ],
  exports:[
    OptimizercontrolTableComponent
  ],
 
})
export class OptimizercontrolModule { }
