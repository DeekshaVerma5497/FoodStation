import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http: HttpClient) { }

  createEmployee(user: User): Observable<Object> {
    //console.log(user);
    return this.http.post('http://localhost:8082/user/registerUser', user);
  }

}
