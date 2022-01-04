import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositRoutingModule } from './deposit-routing.module';
import { DepositTableComponent } from './component/deposit-table/deposit-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MyCustomPaginatorIntl } from 'src/app/_providers/mycustom-international';

@NgModule({
  declarations: [
    DepositTableComponent
  ],
  imports: [
    CommonModule,
    DepositRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    DepositTableComponent
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class DepositModule { }
