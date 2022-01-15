import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { SolutioncommentRoutingModule } from './solutioncomment-routing.module';
import { AdminSolutioncommentsManagerComponent } from './components/admin-solutioncomments-manager/admin-solutioncomments-manager.component';


@NgModule({
  declarations: [
    AdminSolutioncommentsManagerComponent
  ],
  imports: [
    CommonModule,
    SolutioncommentRoutingModule
  ]
})
export class SolutioncommentModule { }
