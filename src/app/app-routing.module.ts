import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ScheduleComponent } from './Pages/schedule/schedule.component';
import { ShoppingCartComponent } from './Pages/shopping-cart/shopping-cart.component';
import { SpeakersComponent } from './Pages/speakers/speakers.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'speakers', component: SpeakersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

