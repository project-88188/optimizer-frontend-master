import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { GithubApi } from "./table/table.component";
import { SortDirection } from "@angular/material/sort";

@Injectable({
  providedIn: 'root'
})
export class TablesoptimizerService {

  constructor(private httpClient: HttpClient) {
  }

  getSampleData(sort: string, order: SortDirection, page: number, q: string): Observable<GithubApi> {
    return this.httpClient.get<GithubApi>(`https://api.github.com/search/issues?q=${q}&sort=${sort}&order=${order}&page=${page + 1}`);
}
}
