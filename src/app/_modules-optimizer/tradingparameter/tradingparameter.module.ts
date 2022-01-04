import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradingparameterRoutingModule } from './tradingparameter-routing.module';
import { TradingparameterTableComponent } from './component/tradingparameter-table/tradingparameter-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MyCustomPaginatorIntl } from 'src/app/_providers/mycustom-international';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TradingparameterTableComponent
  ],
  imports: [
    CommonModule,
    TradingparameterRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    TradingparameterTableComponent
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class TradingparameterModule { }
