import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { TableUserTransectionComponent } from './components/table-user-transection/table-user-transection.component';

@NgModule({
  declarations: [
    TableUserTransectionComponent,
   
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [
    TableUserTransectionComponent,
  
  ]
})

export class TransectionModule { }
