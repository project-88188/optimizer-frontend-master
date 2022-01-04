import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsercontentRoutingModule } from './usercontent-routing.module';
import { UsercontentDetailsComponent } from './components/usercontent-details/usercontent-details.component';
import { UsercontentsListComponent } from './components/usercontents-list/usercontents-list.component';
import { AddUsercontentComponent } from './components/add-usercontent/add-usercontent.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsercontentCardComponent } from './components/usercontent-card/usercontent-card.component';
import { ModeratorUsercontentsManagerComponent } from './components/moderator-usercontents-manager/moderator-usercontents-manager.component';
import { ModeratorUsercontentsCardComponent } from './components/moderator-usercontents-card/moderator-usercontents-card.component';
import { AdminUsercontentsCardComponent } from './components/admin-usercontents-card/admin-usercontents-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatTabsModule} from '@angular/material/tabs';
import { MatInputModule} from '@angular/material/input';
import { MatCommonModule} from '@angular/material/core';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { UsercontentDashboardComponent } from './components/usercontent-dashboard/usercontent-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    UsercontentDetailsComponent,
    UsercontentsListComponent,
    AddUsercontentComponent,
    UsercontentCardComponent,
    ModeratorUsercontentsManagerComponent,
    ModeratorUsercontentsCardComponent,
    AdminUsercontentsCardComponent,
    UsercontentDashboardComponent,
  
  ],
  imports: [
    CommonModule,
    UsercontentRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatCommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    LayoutModule,

  ]
  ,
  exports:[
    UsercontentDetailsComponent,
    UsercontentsListComponent,
    AddUsercontentComponent,
    UsercontentCardComponent,
    ModeratorUsercontentsManagerComponent,
    ModeratorUsercontentsCardComponent,
    AdminUsercontentsCardComponent,
  ]
})
export class UsercontentModule { }
