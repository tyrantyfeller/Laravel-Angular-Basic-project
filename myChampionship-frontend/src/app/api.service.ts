import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(`${this.apiUrl}/teams`);
  }

  getLogin(user:string, pass:string) {
    return this.http.get(`${this.apiUrl}/login`);
  }

  postLogin(user:string, pass:string): Observable<any> {
    let body = {
      user:user,
      pass:pass
    }
    
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token'
      })
    };


    return this.http.post(`${this.apiUrl}/login`, body, httpOptions);
  }

  getAPI() {
    return this.http.get(`${this.apiUrl}`);
  }
  
  startChampionship(data: any) {
    return this.http.post(`${this.apiUrl}/championship/start`, data);
  }
}
