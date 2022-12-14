import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ElementsRoutingModule } from './elements-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtBuyBitoptimizerComponent } from '../_lending/butt-buy-bitoptimizer/butt-buy-bitoptimizer.component';
import { ButtSellBitoptimizerComponent } from '../_lending/butt-sell-bitoptimizer/butt-sell-bitoptimizer.component';
import { ButtDepositComponent } from '../_paypals/butt-deposit/butt-deposit.component';
import { ButtWithdrawalComponent } from '../_paypals/butt-withdrawal/butt-withdrawal.component';
import { SolutionModule } from '../_modules/solution/solution.module';
import { ProductModule } from '../_modules/product/product.module';
import { MarketBoardInvestmentComponent } from '../_investing/market-board-investment/market-board-investment.component';
import { MarketBoardBitoptimizerComponent } from '../_lending/market-board-bitoptimizer/market-board-bitoptimizer.component';
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
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { OptimizeronthecloudComponent } from './optimizeronthecloud/optimizeronthecloud.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { ButtBuyInvestmentComponent } from '../_investing/butt-buy-investment/butt-buy-investment.component';
import { ButtSellInvestmentComponent } from '../_investing/butt-sell-investment/butt-sell-investment.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtBuyBitoptimizerComponent,
    ButtSellBitoptimizerComponent,
    ButtDepositComponent,
    ButtWithdrawalComponent,
    MarketBoardInvestmentComponent,
    MarketBoardBitoptimizerComponent,
    UploadFilesComponent,
    UploadImagesComponent,
    OptimizeronthecloudComponent,   
    ButtBuyBitoptimizerComponent,
    ButtSellBitoptimizerComponent,
    ButtBuyInvestmentComponent,
    ButtSellInvestmentComponent,
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
    MatSelectModule,
    NgxPayPalModule,

  ],
  exports :[
    FooterComponent,
    HeaderComponent,
    ButtBuyBitoptimizerComponent,
    ButtSellBitoptimizerComponent,
    ButtDepositComponent,
    ButtWithdrawalComponent,
    ButtBuyBitoptimizerComponent,
    ButtSellBitoptimizerComponent,
    ButtBuyInvestmentComponent,
    ButtSellInvestmentComponent,
    UploadFilesComponent,
    UploadImagesComponent,
    OptimizeronthecloudComponent,
  
  ],
  providers :[
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
    

})
export class ElementsModule { }
