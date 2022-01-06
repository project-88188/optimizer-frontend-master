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
import { MarketBitoptimizerComponent } from './market-bitoptimizer/market-bitoptimizer.component';
import { MarketInvestmentComponent } from './market-investment/market-investment.component';
import { MarketBoardComponent } from './market-board/market-board.component';
import { GreetingTitleComponent } from './greeting-title/greeting-title.component';
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
    MarketBitoptimizerComponent,
    MarketInvestmentComponent,
    MarketBoardComponent,
    GreetingTitleComponent,
    MarketBoardInvestmentComponent,
    MarketBoardBitoptimizerComponent,
    UploadFilesComponent,
    UploadImagesComponent,
   
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
    MarketBoardComponent,
    GreetingTitleComponent,
    UploadFilesComponent,
    UploadImagesComponent,
  ]

})
export class ElementsModule { }
