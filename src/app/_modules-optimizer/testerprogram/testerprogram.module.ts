import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesterprogramRoutingModule } from './testerprogram-routing.module';
import { TesterprogramTableComponent } from './component/testerprogram-table/testerprogram-table.component';

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
    TesterprogramTableComponent
  ],
  imports: [
    CommonModule,
    TesterprogramRoutingModule,
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
    TesterprogramTableComponent,
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class TesterprogramModule { }
