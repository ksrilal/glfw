import { Component, OnInit, Input } from "@angular/core";
import { ShoppingCartService } from "../shopping-cart.service";

@Component({
  selector: "app-event-card",
  templateUrl: "./event-card.component.html",
  styleUrls: ["./event-card.component.scss"]
})
export class EventCardComponent implements OnInit {
  @Input("event") event;
  @Input("shopping-cart") shoppingCart: any[];

  constructor(private cartService: ShoppingCartService) {}
  addToCart() {
    this.cartService.addToCart(this.event);
  }
  removeFromCart() {
    this.cartService.removeFromCart(this.event);
  }

  ngOnInit() {}

  getQuantity() {
    if (!this.shoppingCart) return;

    const item = this.shoppingCart;

    let quan = 0;
    item.forEach(i => {
      if (i["ticket"]["id"] == this.event.id) {
        // console.log(i["product"]["id"]);
        quan = i["quantity"];
      }
    });
    return quan;

  }
}
