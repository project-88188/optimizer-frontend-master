import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usercontent } from '../models/usercontent.model';
import { BASE_URL } from 'src/app/_providers/global-url';

const API_URL = BASE_URL + '/usercontents/';

@Injectable({
  providedIn: 'root'
})

export class UsercontentService {

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(API_URL, { params });
  }

  get(id: any): Observable<Usercontent> {
    return this.http.get(`${API_URL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API_URL);
  }

  findByTitle(title: any): Observable<Usercontent[]> {
    return this.http.get<Usercontent[]>(`${API_URL}?title=${title}`);
  }

  getByUsername(username:any): Observable<Usercontent> {
    return this.http.get<Usercontent>(`${API_URL}?username=${username}`);
  }
  
}
