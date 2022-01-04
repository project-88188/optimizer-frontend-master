import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
