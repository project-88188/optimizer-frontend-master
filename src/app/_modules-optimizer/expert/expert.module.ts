import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertRoutingModule } from './expert-routing.module';
import { ExpertTableComponent } from './component/expert-table/expert-table.component';

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
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    ExpertTableComponent
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class ExpertModule { }
