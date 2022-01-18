import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/_providers/global-url';
import { SortDirection } from "@angular/material/sort";
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { PayoutService } from 'src/app/_paypals/payout.service';

const API_URL = BASE_URL + '/server/transections';

const _httpOptions = {
  headers:  new HttpHeaders()
  .append('Content-Type', ['application/json'])
  .append('Accept', ['application/json'])
  
};

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
    private payoutService:PayoutService,
    private tokenStorage:TokenStorageService) { }


  getusertransection(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {
  const username=this.tokenStorage.getUser().username;
  this.payoutService.updatepayout(username).subscribe(()=>{});
  return this.http.get<DataApi>(API_URL+`/table/search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
  }

  create(transection:any): Observable<any> {
  return   this.http.post(API_URL+'/create',transection,_httpOptions);
  }

  fineByPk(id:any): Observable<any> {
  return   this.http.get(API_URL+`/find/${id}`,_httpOptions);
  }


  update(id:any,transection:any): Observable<any> {
  return   this.http.put(API_URL+`/update/${id}`,transection,_httpOptions);
  }


  delete(id:any): Observable<any> {
  return   this.http.get(API_URL+`/delete/${id}`,_httpOptions);
  }

}
