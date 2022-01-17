
import { SortDirection } from "@angular/material/sort";
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/_providers/global-url';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

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



export interface DataApi {
  items:any[];
  total_count: number;
  message:string;
}

@Injectable({
  providedIn: 'root'
})
export class TablesoptimizerService {

  constructor(private httpClient: HttpClient,
    private tokenStorage:TokenStorageService) {
  }

  getSampleData(sort: string, order: SortDirection, page: number, q: string): Observable<GithubApi> {
    return this.httpClient.get<GithubApi>(`https://api.github.com/search/issues?q=${q}&sort=${sort}&order=${order}&page=${page + 1}`);
}

getData(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/transections/table/';

  const _httpOptions = {
    headers:  new HttpHeaders()
    .append('x-access-token',[''+this.tokenStorage.getToken()])
    .append('Content-Type', ['application/json'])
    .append('Accept', ['application/json'])
   
  };

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}
}
