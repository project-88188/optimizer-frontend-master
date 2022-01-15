import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableUserTransectionComponent } from './components/table-user-transection/table-user-transection.component';
import { TableModulatorTransectionComponent } from './components/table-modulator-transection/table-modulator-transection.component';
import { TableAdminTransectionComponent } from './components/table-admin-transection/table-admin-transection.component';


@NgModule({
  declarations: [
    TableUserTransectionComponent,
    TableModulatorTransectionComponent,
    TableAdminTransectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    TableUserTransectionComponent,
    TableModulatorTransectionComponent,
    TableAdminTransectionComponent
  ]
})

export class TransectionModule { }
