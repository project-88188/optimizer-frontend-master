
import { Component, AfterViewInit,ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, merge, of } from 'rxjs';
import { startWith, switchMap, catchError, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TablesoptimizerService } from '../tablesoptimizer.service';



@Component({
  selector: 'app-optimizercontrol-table',
  templateUrl: './optimizercontrol-table.component.html',
  styleUrls: ['./optimizercontrol-table.component.css']
})
export class OptimizercontrolTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  data: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  resultsMessage ='';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() isLoggedIn:any;
  
  constructor(private tableService: TablesoptimizerService) { }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.term$.pipe(debounceTime(1000), distinctUntilChanged()), this.paginator.page).subscribe(data=>{

      if(this.isLoggedIn) {
        this.tableService!.getData(this.sort.active, this.sort.direction, this.paginator.pageIndex,this.paginator.pageSize, 
          (this.term$.getValue() && typeof this.term$.getValue()== 'string') ? this.term$.getValue().toString() : 'repo:angular/components').subscribe(values=>{
         
            this.data=values.items;
            this.resultsLength=values.total_count;
            this.resultsMessage=values.message;
  
          });
        
      }
      else
      {


      }


    });
  }

}
