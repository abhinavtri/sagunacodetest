import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartData: Cart[] = [];
  subject$ = new Subject<Cart[]>();
  cartTotal=0;
  
  constructor() { }

  addToCart(product: Cart) {
    
    const index = this.cartData.findIndex((item) => {
      return item.id === product.id;
      
    });
    
    if (index !== -1) {
      
      this.cartData[index].qty = this.cartData[index].qty + 1;
      
    } else {
      this.cartData.push(product);
      
    }
    this.subject$.next(this.cartData);
   
    
  }
  
  removeFromCart(id: number) {
    const index = this.cartData.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.cartData[index].qty = this.cartData[index].qty - 1;
      
      if (this.cartData[index].qty === 0) {
        this.cartData.splice(index, 1);
      }
    }
    this.subject$.next(this.cartData);
    
  }

  
}
