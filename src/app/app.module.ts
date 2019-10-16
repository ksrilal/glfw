import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ScheduleComponent } from './Pages/schedule/schedule.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './Pages/shopping-cart/shopping-cart.component';
import { SpeakersComponent } from './Pages/speakers/speakers.component';
import { LoginComponent } from './Pages/login/login.component';
import { EventsComponent } from './pages/events/events.component';
import { EventCardComponent } from './event-card/event-card.component';
import { TicketService } from './ticket.service';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from "@angular/fire";
import {AngularFirestoreModule} from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    SpeakersComponent,
    LoginComponent,
    EventsComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
