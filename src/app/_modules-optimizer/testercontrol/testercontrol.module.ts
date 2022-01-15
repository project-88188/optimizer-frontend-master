import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestercontrolRoutingModule } from './testercontrol-routing.module';
import { TestercontrolTableComponent } from './component/testercontrol-table/testercontrol-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';


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
    FormsModule,
 
  ],
  exports:[
    TestercontrolTableComponent
  ],
 
})
export class TestercontrolModule { }
