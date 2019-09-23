import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  public count = 1;
  public tprice = 20;

  public amount=20 ;


  ngOnInit() {
  }

  increment() {
    this.count++;
    this.amount +=this.tprice;
  }
  decrement() {
    if (this.count <= 0) {
      this.count = 0;
      return;
    }
    this.count--;
    this.amount -= this.tprice;

  }

}
