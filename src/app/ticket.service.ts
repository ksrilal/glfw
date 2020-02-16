import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private afs: AngularFirestore) {}

  getAll(date:string) {
    return this.afs.collection("events",ref=>ref.where('date',"==",date)).valueChanges({ idField: "id" });
  }

  getTickets() {
    return this.afs.collection("events").valueChanges({ idField: "id" });
  }

}
