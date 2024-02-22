import { Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EventzComponent } from './eventz/eventz.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'events', component: EventzComponent},
  {path:'alerts', loadComponent: ()=>
  import("./features/timeline/timeline.component").then((c) =>
   c.TimelineComponent)},
  {path: 'statistics', component:StatisticsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];
