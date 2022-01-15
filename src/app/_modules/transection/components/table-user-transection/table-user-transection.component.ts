
import {  AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, merge, of } from 'rxjs';
import { startWith, switchMap, catchError, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TransectionService } from '../../services/transection.service';


@Component({
  selector: 'app-table-user-transection',
  templateUrl: './table-user-transection.component.html',
  styleUrls: ['./table-user-transection.component.css']
})
export class TableUserTransectionComponent implements AfterViewInit {

  displayedColumns: string[] = ['Name'];
  data: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private transService:TransectionService) { }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
  //  this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.term$.pipe(debounceTime(1000), distinctUntilChanged()), this.paginator.page)
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          return this.transService!.getData(this.sort.active, this.sort.direction, this.paginator.pageIndex,this.paginator.pageSize, (searchTerm && typeof searchTerm == 'string') ? searchTerm.toString() : 'repo:angular/components')
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          if (data === null) {
            return [];
          }

          this.resultsLength = data.total_count;
          console.log(JSON.stringify(data));
          return data.items;
        })
        ).subscribe(data => {
          this.data = data
          console.log(JSON.stringify(data));
        });
  }

}
