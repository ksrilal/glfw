import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "src/app/shopping-cart.service";
import { LoginService } from "src/app/login.service";
import { Router, RouterStateSnapshot } from "@angular/router";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  cart$;
  myCart: any[];
  shoppingCartItemCount: number;
  totalPrice: number;

  constructor(
    private shoppingCart: ShoppingCartService,
    private loginService: LoginService,
    private router: Router
  ) {}

  async ngOnInit() {
    let cart$ = await this.shoppingCart.getCart();
    cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0;
      this.totalPrice = 0;
      for (let ticketId in cart) {
        this.shoppingCartItemCount += cart[ticketId]["quantity"];
        this.totalPrice += Number(cart[ticketId]["ticket"]["price"]);
        this.myCart = cart;
      }
      console.log(this.myCart);
    });
  }

  addToCart(item) {
    // this.shoppingCart.addToCart(item);
    console.log(item);
  }

  checkout() {
    var state = localStorage.getItem("isLoggedIn");
    console.log(state);
    if (state == null) {
      this.router.navigate(["/login"]);
    } else {
      this.shoppingCart.checkout(this.myCart);
      localStorage.removeItem("cartId");
      this.router.navigate(["/account"]);
    }
    // if (state == "true") {
    //   console.log("DONE");
    //   this.shoppingCart.checkout(this.myCart);
    // }
    //  { queryParams: { returnUrl: this.state.url } });
    // localStorage.removeItem("cartId");
  }
}
