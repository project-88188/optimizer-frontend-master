import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptimizercontrolRoutingModule } from './optimizercontrol-routing.module';
import { OptimizercontrolTableComponent } from './component/optimizercontrol-table/optimizercontrol-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';


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
    FormsModule,
   
  ],
  exports:[
    OptimizercontrolTableComponent
  ],
 
})
export class OptimizercontrolModule { }
