import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(`${this.apiUrl}/teams`);
  }

  startChampionship(data: any) {
    return this.http.post(`${this.apiUrl}/championship/start`, data);
  }
}
