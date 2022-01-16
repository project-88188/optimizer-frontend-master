import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, merge, of } from 'rxjs';
import { startWith, switchMap, catchError, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TradingparameterTableService } from '../../service/tradingparameter-table.service';

//npm install material-design-icons
//$ npm install --save @angular/material @angular/cdk @angular/animations

@Component({
  selector: 'app-tradingparameter-table',
  templateUrl: './tradingparameter-table.component.html',
  styleUrls: ['./tradingparameter-table.component.css']
})
export class TradingparameterTableComponent  implements AfterViewInit {
 
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  data: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  resultsMessage ='';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input()
  currentUserContent: any;

  constructor(
    private tradingparamService:TradingparameterTableService) {}

    ngAfterViewInit() {

      if(!this.currentUserContent)
      return;
      // If the user changes the sort order, reset back to the first page.
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  
      merge(this.sort.sortChange, this.term$.pipe(debounceTime(1000), distinctUntilChanged()), this.paginator.page).subscribe(data=>{
  
        this.tradingparamService.getData(this.currentUserContent.username,this.sort.active, this.sort.direction, this.paginator.pageIndex,this.paginator.pageSize, 
          (this.term$.getValue() && typeof this.term$.getValue()== 'string') ? this.term$.getValue().toString() : 'repo:angular/components').subscribe(values=>{
         
            this.data=values.items;
            this.resultsLength=values.total_count;
            this.resultsMessage=values.message;
  
          });
      });
      
    }

}
