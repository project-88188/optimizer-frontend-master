import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransectionRoutingModule } from './transection-routing.module';
import { AddTransectionComponent } from './components/add-transection/add-transection.component';
import { TransectionDetailsComponent } from './components/transection-details/transection-details.component';
import { TransectionsListComponent } from './components/transections-list/transections-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserTransectionCardsListComponent } from './components/user-transection-cards-list/user-transection-cards-list.component';


@NgModule({
  declarations: [
    AddTransectionComponent,
    TransectionDetailsComponent,
    TransectionsListComponent,
    UserTransectionCardsListComponent
  ],
  imports: [
    CommonModule,
    TransectionRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    AddTransectionComponent,
    TransectionDetailsComponent,
    TransectionsListComponent,
    UserTransectionCardsListComponent
  ]
})

export class TransectionModule { }
