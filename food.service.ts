import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from './food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  public getFood() {
    return this.http.get<Food[]>('http://localhost:8080/getFood/food');
  }

  addToCart(food): Observable<any> {
    return this.http.post('http://localhost:8080/getFood/Cart/',food, { responseType: 'text' });
  }

}
