import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { UsercommentRoutingModule } from './usercomment-routing.module';
import { AdminUsercommentsManagerComponent } from './components/admin-usercomments-manager/admin-usercomments-manager.component';


@NgModule({
  declarations: [
    AdminUsercommentsManagerComponent
  ],
  imports: [
    CommonModule,
    UsercommentRoutingModule
  ]
})
export class UsercommentModule { }
