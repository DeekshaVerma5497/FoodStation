import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from './cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

   public getCart() {
    return this.http.get<Cart[]>('http://localhost:8080/getCart/cart');
  }

  deleteFromCart(): Observable<any> {
    return this.http.post('http://localhost:8080/getCart/CartEmpty/', { responseType: 'text' });
  }
}
