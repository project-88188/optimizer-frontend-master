import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { UsermanagerRoutingModule } from './usermanager-routing.module';
import { AdminUsersManagerComponent } from './components/admin-users-manager/admin-users-manager.component';
import { AdminModeratorsManagerComponent } from './components/admin-moderators-manager/admin-moderators-manager.component';
import { ModeratorsListComponent } from './components/moderators-list/moderators-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddModeratorComponent } from './components/add-moderator/add-moderator.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ModeratorDetailComponent } from './components/moderator-detail/moderator-detail.component';


@NgModule({
  declarations: [
    AdminUsersManagerComponent,
    AdminModeratorsManagerComponent,
    ModeratorsListComponent,
    UsersListComponent,
    AddModeratorComponent,
    AddUserComponent,
    UserDetailComponent,
    ModeratorDetailComponent
  ],
  imports: [
    CommonModule,
    UsermanagerRoutingModule
  ],
  exports: [
    AdminUsersManagerComponent,
    AdminModeratorsManagerComponent,
    ModeratorsListComponent,
    UsersListComponent,
    AddModeratorComponent,
    AddUserComponent,
    UserDetailComponent,
    ModeratorDetailComponent
  ]
})
export class UsermanagerModule { }
