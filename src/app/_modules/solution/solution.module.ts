import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionRoutingModule } from './solution-routing.module';
import { AddSolutionComponent } from './components/add-solution/add-solution.component';
import { SolutionDetailsComponent } from './components/solution-details/solution-details.component';
import { SolutionsListComponent } from './components/solutions-list/solutions-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MarketSolutionCardsListComponent } from './components/market-solution-cards-list/market-solution-cards-list.component';
import { AdminSolutionsManagerComponent } from './components/admin-solutions-manager/admin-solutions-manager.component';
import { UserSolutionCardsListComponent } from './components/user-solution-cards-list/user-solution-cards-list.component';

@NgModule({
  declarations: [
    AddSolutionComponent,
    SolutionDetailsComponent,
    SolutionsListComponent,
    MarketSolutionCardsListComponent,
    AdminSolutionsManagerComponent,
    UserSolutionCardsListComponent,
  ],
  imports: [
    CommonModule,
    SolutionRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    AddSolutionComponent,
    SolutionDetailsComponent,
    SolutionsListComponent,
    MarketSolutionCardsListComponent,
    AdminSolutionsManagerComponent,
    UserSolutionCardsListComponent,
  ]
})
export class SolutionModule { }
