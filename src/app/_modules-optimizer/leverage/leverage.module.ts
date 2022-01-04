import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeverageRoutingModule } from './leverage-routing.module';
import { LeverageTableComponent } from './component/leverage-table/leverage-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MyCustomPaginatorIntl } from 'src/app/_providers/mycustom-international';

@NgModule({
  declarations: [
    LeverageTableComponent
  ],
  imports: [
    CommonModule,
    LeverageRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    LeverageTableComponent
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class LeverageModule { }
