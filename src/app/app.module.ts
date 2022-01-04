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
import { CurrencyModule } from './_modules-optimizer/currency/currency.module';
import { DepositModule } from './_modules-optimizer/deposit/deposit.module';
import { ExpertModule } from './_modules-optimizer/expert/expert.module';
import { LeverageModule } from './_modules-optimizer/leverage/leverage.module';
import { OptimizercontrolModule } from './_modules-optimizer/optimizercontrol/optimizercontrol.module';
import { PeriodModule } from './_modules-optimizer/period/period.module';
import { SymbolModule } from './_modules-optimizer/symbol/symbol.module';
import { TestercontrolModule } from './_modules-optimizer/testercontrol/testercontrol.module';
import { TesterresultModule } from './_modules-optimizer/testerresult/testerresult.module';
import { TotaldayModule } from './_modules-optimizer/totalday/totalday.module';
import { TradingparameterModule } from './_modules-optimizer/tradingparameter/tradingparameter.module';
import { TesterprogramModule } from './_modules-optimizer/testerprogram/testerprogram.module';
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
    CurrencyModule,
    DepositModule,
    ExpertModule,
    LeverageModule,
    OptimizercontrolModule,
    PeriodModule,
    SymbolModule,
    TestercontrolModule,
    TesterresultModule,
    TotaldayModule,
    TradingparameterModule,
    TesterprogramModule,
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
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
