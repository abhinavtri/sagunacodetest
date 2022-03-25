import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  
  product: Product[];
  
  constructor(private service:ProductService, private cartservice:CartService) { }
  
  
  ngOnInit(): void {
    
   this.service.getJSON().subscribe(data=>{
    
    this.product=data
   });
   
   
  }
  
  
  additem(product:Product){
    let cartItem = {
      id: product.id,
      pname: product.pname,
      qty: 1,
      price: product.price,
      
    };
    this.cartservice.addToCart(cartItem);
    
  }
  
  
}
