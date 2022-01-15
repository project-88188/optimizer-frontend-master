import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { TestercontrolRoutingModule } from './testercontrol-routing.module';
import { TestercontrolTableComponent } from './component/testercontrol-table/testercontrol-table.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    TestercontrolTableComponent
  ],
  imports: [
    CommonModule,
    TestercontrolRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
 
  ],
  exports:[
    TestercontrolTableComponent
  ],
 
})
export class TestercontrolModule { }
