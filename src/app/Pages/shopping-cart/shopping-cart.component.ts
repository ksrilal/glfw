import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart$;
  myCart:any[];
  shoppingCartItemCount:number;
  totalPrice:number;

  constructor(private shoppingCart: ShoppingCartService) { }


  async ngOnInit() {
    let cart$ = await this.shoppingCart.getCart();
    cart$.subscribe(cart=>{
      this.shoppingCartItemCount=0;
      this.totalPrice=0;
      for(let ticketId in cart){
        this.shoppingCartItemCount+= cart[ticketId]['quantity'];
        this.totalPrice += Number(cart[ticketId]["ticket"]["price"]);
        this.myCart=cart;
      }
      console.log(this.myCart);
    })
  }

  addToCart(item) {
    // this.shoppingCart.addToCart(item);
    console.log(item);

  }

  checkout(){
    this.shoppingCart.checkout(this.myCart);
    localStorage.removeItem('cartId');

  }


}
