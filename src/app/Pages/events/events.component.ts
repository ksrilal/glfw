import { Component, OnInit } from "@angular/core";
import { TicketService } from "src/app/ticket.service";
import { Subscription } from "rxjs";
import { ShoppingCartService } from "src/app/shopping-cart.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit {
  events: any[];
  cart;
  subscription: Subscription;

  constructor (
    private ticketService: TicketService,
    private shoppingCart: ShoppingCartService
  ) {
    ticketService.getTickets().subscribe(events => {
      this.events = events;
      // console.log(events);
    });
  } 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCart.getCart()).subscribe(cart => {
      this.cart = cart;
    });
  }

}
