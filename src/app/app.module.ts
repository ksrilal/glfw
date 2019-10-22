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
import { environment } from 'src/environments/environment.prod';

import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
//import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { SpeakerCardComponent } from './speaker-card/speaker-card.component';
import { SpeakerService } from './speaker.service';



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
    SpeakerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    // AngularFireDatabaseModule,
    //ReactiveFormsModule

  ],
  providers: [LoginService,SpeakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
