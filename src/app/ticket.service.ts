import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private afs: AngularFirestore) {}

  getAll() {
    return this.afs.collection("events").valueChanges({ idField: "id" });
  }

}
