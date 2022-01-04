import {  AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, merge, of } from 'rxjs';
import { startWith, switchMap, catchError, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TesterresultTableService } from '../../service/testerresult-table.service';

//$ npm install --save @angular/material @angular/cdk @angular/animations


@Component({
  selector: 'app-testerresult-table',
  templateUrl: './testerresult-table.component.html',
  styleUrls: ['./testerresult-table.component.css']
})
export class TesterresultTableComponent  implements AfterViewInit {

  displayedColumns: string[] = ['Expert','Symbol','Period','ROI','DD','Trade','TotalDay','CreatedAt'];
  data: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  currentpageindex=1;
  amountPages = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private symbolService:TesterresultTableService) { }

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
}
