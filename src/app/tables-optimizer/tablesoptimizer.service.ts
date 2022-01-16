import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { SortDirection } from "@angular/material/sort";

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
