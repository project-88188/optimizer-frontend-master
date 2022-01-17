import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/_providers/global-url';
import { SortDirection } from "@angular/material/sort";
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const baseUrl = BASE_URL + '/server/transections';

export interface DataApi {
  items:any[];
  total_count: number;
  message:string;
}

@Injectable({
  providedIn: 'root'
})
export class TransectionService {

  constructor(private http: HttpClient,
    private tokenStorage:TokenStorageService) { }

  getData(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

    const username=this.tokenStorage.getUser().username;

    const _httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorage.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return this.http.get<DataApi>(baseUrl+`/table/search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
 }

}
