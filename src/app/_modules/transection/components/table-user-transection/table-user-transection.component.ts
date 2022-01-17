
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, merge, of } from 'rxjs';
import { startWith, switchMap, catchError, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TransectionService } from '../../services/transection.service';


export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

@Component({
  selector: 'app-table-user-transection',
  templateUrl: './table-user-transection.component.html',
  styleUrls: ['./table-user-transection.component.css']
})
export class TableUserTransectionComponent implements AfterViewInit {

  displayedColumns: string[] = ['Time','Type','Amount','TotalUnit','UnitPrice','Status'];
  data:any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  resultsMessage ='';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input()
  currentUserContent: any;

  constructor(private transService:TransectionService) { }

  ngAfterViewInit() {

    if(!this.currentUserContent)
    return;
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.term$.pipe(debounceTime(1000), distinctUntilChanged()), this.paginator.page).subscribe(data=>{

      this.transService!.getData(this.sort.active, this.sort.direction, this.paginator.pageIndex,this.paginator.pageSize, 
        (this.term$.getValue() && typeof this.term$.getValue()== 'string') ? this.term$.getValue().toString() : 'repo:angular/components').subscribe(values=>{
       
          this.data=values.items;
          this.resultsLength=values.total_count;
          this.resultsMessage=values.message;

        });
    });
    
  }
}
