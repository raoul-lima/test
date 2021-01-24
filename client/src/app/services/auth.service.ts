import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Users } from '../models/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const REST_API_SERVER = "http://localhost:4040/users/";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(username:string, password:string): Observable<any> {
    return this.http.post(REST_API_SERVER+'login',{
      username,
      password
    },httpOptions );
  }

  signUp(username:string, email:string, password:string): Observable<any>{
    return this.http.post(REST_API_SERVER+'register',{
      username,
      email,
      password
    }, httpOptions)
  }
  
}
