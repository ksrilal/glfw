import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ScheduleComponent } from './Pages/schedule/schedule.component';
import { ShoppingCartComponent } from './Pages/shopping-cart/shopping-cart.component';
import { SpeakersComponent } from './Pages/speakers/speakers.component';
import { LoginComponent } from './Pages/login/login.component';
import { EventsComponent } from './pages/events/events.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

