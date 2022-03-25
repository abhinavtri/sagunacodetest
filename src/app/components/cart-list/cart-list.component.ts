import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private cartService:CartService) {}
  
  cartData:Cart[]=[];
  
  ngOnInit() {
    this.cartService.subject$.subscribe((data) => {
      this.cartData = data;
          });
          
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

}
