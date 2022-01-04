import {  AfterViewInit, Component, ViewChild } from '@angular/core';
import { ControlContainer } from '@angular/forms';
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
 
  displayedColumns: string[] = ['Expert','Symbol','Period','DD','ROI'];
  data: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;

  term$ = new BehaviorSubject<string>('');
  resultsLength = 1000;
  currentpageindex=1;
  amountPages = 0;
  
  // pageEvent output
  pageEvent:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private symbolService:TradingparameterTableService) {}

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.term$.pipe(debounceTime(1000), distinctUntilChanged()), this.paginator.page)
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          return this.symbolService!.getData(this.sort.active, this.sort.direction, this.paginator.pageIndex, (searchTerm && typeof searchTerm == 'string') ? searchTerm.toString() : 'repo:angular/components')
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          if (data === null) {
            return [];
          }

          this.resultsLength = data.total_count;
          this.amountPages = Math.ceil(this.resultsLength / this.paginator.pageSize);
        
          return data.items;
        })
      ).subscribe(data => this.data = data);

  }

  lastPage(){
   this.paginator.lastPage();
   this.currentpageindex=this.paginator.pageIndex+1;
  }

  firstPage(){
   this.paginator.firstPage();
   this.currentpageindex=this.paginator.pageIndex+1;
  }

  previousPage(){
   if(this.paginator.hasPreviousPage())
      this.paginator.previousPage();
      else
      this.paginator.firstPage();
      this.currentpageindex=this.paginator.pageIndex+1;
   }
 
   nextPage(){
     if(this.paginator.hasNextPage())
      this.paginator.nextPage();
      else
      this.paginator.lastPage();
      this.currentpageindex=this.paginator.pageIndex+1;
   }
 
   inputPageChanged(event:number){
     this.paginator.lastPage();
     let last = this.paginator.pageIndex+1;
     if(event<last && event>0)
     this.paginator.pageIndex=event-1;
     if(event<=0 || !event)
     this.paginator.pageIndex=0;
     this.currentpageindex=this.paginator.pageIndex+1;
   }


    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
  
}
