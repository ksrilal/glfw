import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(private afs: AngularFirestore) {
   }

   getAll() {
     return this.afs.collection('speakers').valueChanges();
   }
}
