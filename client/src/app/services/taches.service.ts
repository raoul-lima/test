import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taches } from '../models/taches';


const API_URL = 'http://localhost:4040/api/taches';
@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private http: HttpClient) { }

  createTache(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  getoneTache(id: any): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  getAllTache(): Observable<Taches[]> {
    return this.http.get<Taches[]>(API_URL);
  }

  updateTache(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, data);
  }

  deleteTache(id: any): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

}
