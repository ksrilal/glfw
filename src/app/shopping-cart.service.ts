import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
// import "rxjs/add/operator/take";
// import "rxjs/add/operator/map";
import { take, switchMap, partition } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  constructor(private afs: AngularFirestore) {}

  private create() {
    return this.afs
      .collection("shopping-cart")
      .add({ dateCreated: new Date().getTime() });
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    const result = await this.create();
    localStorage.setItem("cartId", result.id);
    return result.id;
  }

  async addToCart(ticket) {
    this.updateItemQuantity(ticket, 1);
  }
  async removeFromCart(ticket) {
    this.updateItemQuantity(ticket, -1);
  }

  private async updateItemQuantity(ticket, change: number) {
    const cartId = await this.getOrCreateCartId();

    const items$ = this.afs
      .collection("shopping-cart")
      .doc(cartId)
      .collection("items")
      .doc(ticket.id)
      .get();

    items$.pipe(take(1)).subscribe(item => {
      if (item.exists) {
        this.afs
          .collection("shopping-cart")
          .doc(cartId)
          .collection("items")
          .doc(ticket.id)
          .set({ ticket: ticket, quantity: item.get("quantity") + change });
      } else {
        this.afs
          .collection("shopping-cart")
          .doc(cartId)
          .collection("items")
          .doc(ticket.id)
          .set({ ticket: ticket, quantity: 1 });
      }
    });
  }
}
