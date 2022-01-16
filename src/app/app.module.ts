import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProductModule } from './_modules/product/product.module';
import { SolutionModule } from './_modules/solution/solution.module';
import { TransectionModule } from './_modules/transection/transection.module';
import { UsercontentModule } from './_modules/usercontent/usercontent.module';
import { UsermanagerModule } from './_modules/usermanager/usermanager.module';
import { ElementsModule } from './elements/elements.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule} from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatCommonModule} from '@angular/material/core'; 
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { TablesOptimizerModule } from './tables-optimizer/tables-optimizer.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    SolutionModule,
    TransectionModule,
    UsercontentModule,
    UsermanagerModule,
    ElementsModule,
    TablesOptimizerModule, 

    BrowserAnimationsModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatCommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,

  ],
  exports:[

  ],
//  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
