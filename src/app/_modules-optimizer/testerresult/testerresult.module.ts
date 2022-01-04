import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterresultRoutingModule } from './testerresult-routing.module';
import { TesterresultTableComponent } from './component/testerresult-table/testerresult-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MyCustomPaginatorIntl } from 'src/app/_providers/mycustom-international';

import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TesterresultTableComponent
  ],
  imports: [
    CommonModule,
    TesterresultRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    TesterresultTableComponent
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class TesterresultModule { }
