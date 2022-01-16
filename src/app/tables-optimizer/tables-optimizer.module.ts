import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyTableComponent } from './currency-table/currency-table.component';
import { DepositTableComponent } from './deposit-table/deposit-table.component';
import { ExpertTableComponent } from './expert-table/expert-table.component';
import { LeverageTableComponent } from './leverage-table/leverage-table.component';
import { OptimizercontrolTableComponent } from './optimizercontrol-table/optimizercontrol-table.component';
import { TestercontrolTableComponent } from './testercontrol-table/testercontrol-table.component';
import { ProgramTableComponent } from './program-table/program-table.component';
import { TestresultTableComponent } from './testresult-table/testresult-table.component';
import { TotaldayTableComponent } from './totalday-table/totalday-table.component';
import { TradingparameterTableComponent } from './tradingparameter-table/tradingparameter-table.component';



@NgModule({
  declarations: [
    CurrencyTableComponent,
    DepositTableComponent,
    ExpertTableComponent,
    LeverageTableComponent,
    OptimizercontrolTableComponent,
    TestercontrolTableComponent,
    ProgramTableComponent,
    TestresultTableComponent,
    TotaldayTableComponent,
    TradingparameterTableComponent
  ],
  exports:[
    CurrencyTableComponent,
    DepositTableComponent,
    ExpertTableComponent,
    LeverageTableComponent,
    OptimizercontrolTableComponent,
    TestercontrolTableComponent,
    ProgramTableComponent,
    TestresultTableComponent,
    TotaldayTableComponent,
    TradingparameterTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TablesOptimizerModule { }
