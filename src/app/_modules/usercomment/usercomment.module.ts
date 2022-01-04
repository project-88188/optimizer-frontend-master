import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
