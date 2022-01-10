import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ElementsRoutingModule } from './elements-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtBuyBitoptimizerComponent } from './butt-buy-bitoptimizer/butt-buy-bitoptimizer.component';
import { ButtBuyInvestmentComponent } from './butt-buy-investment/butt-buy-investment.component';
import { ButtSellInvestmentComponent } from './butt-sell-investment/butt-sell-investment.component';
import { ButtSellBitoptimizerComponent } from './butt-sell-bitoptimizer/butt-sell-bitoptimizer.component';
import { ButtDepositComponent } from './butt-deposit/butt-deposit.component';
import { ButtWithdrawalComponent } from './butt-withdrawal/butt-withdrawal.component';
import { SolutionModule } from '../_modules/solution/solution.module';
import { ProductModule } from '../_modules/product/product.module';
import { MarketBoardInvestmentComponent } from './market-board-investment/market-board-investment.component';
import { MarketBoardBitoptimizerComponent } from './market-board-bitoptimizer/market-board-bitoptimizer.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';

import { MatTabsModule} from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatCommonModule} from '@angular/material/core';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OptimizeronthecloudComponent } from './optimizeronthecloud/optimizeronthecloud.component';

import { CurrencyModule } from '../_modules-optimizer/currency/currency.module';
import { DepositModule } from '../_modules-optimizer/deposit/deposit.module';
import { ExpertModule } from '../_modules-optimizer/expert/expert.module';
import { LeverageModule } from '../_modules-optimizer/leverage/leverage.module';
import { OptimizercontrolModule } from '../_modules-optimizer/optimizercontrol/optimizercontrol.module';
import { PeriodModule } from '../_modules-optimizer/period/period.module';
import { SymbolModule } from '../_modules-optimizer/symbol/symbol.module';
import { TestercontrolModule } from '../_modules-optimizer/testercontrol/testercontrol.module';
import { TesterresultModule } from '../_modules-optimizer/testerresult/testerresult.module';
import { TotaldayModule } from '../_modules-optimizer/totalday/totalday.module';
import { TradingparameterModule } from '../_modules-optimizer/tradingparameter/tradingparameter.module';
import { TesterprogramModule } from '../_modules-optimizer/testerprogram/testerprogram.module';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtBuyBitoptimizerComponent,
    ButtBuyInvestmentComponent,
    ButtSellInvestmentComponent,
    ButtSellBitoptimizerComponent,
    ButtDepositComponent,
    ButtWithdrawalComponent,
    MarketBoardInvestmentComponent,
    MarketBoardBitoptimizerComponent,
    UploadFilesComponent,
    UploadImagesComponent,
    OptimizeronthecloudComponent,
   
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SolutionModule,
    ProductModule,
    FormsModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatCommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,

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

    NgxPayPalModule

  ],
  exports :[
    FooterComponent,
    HeaderComponent,
    ButtBuyBitoptimizerComponent,
    ButtBuyInvestmentComponent,
    ButtSellInvestmentComponent,
    ButtSellBitoptimizerComponent,
    ButtDepositComponent,
    ButtWithdrawalComponent,
    UploadFilesComponent,
    UploadImagesComponent,
    OptimizeronthecloudComponent,
  
  ]

})
export class ElementsModule { }
