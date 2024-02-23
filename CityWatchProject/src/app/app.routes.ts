import { Routes } from '@angular/router';
import { AlertComponent } from './shared/components/alert/alert.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EventzComponent } from './eventz/eventz.component';
import { LoginComponent } from './features/timeline/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path:'events', loadComponent: ()=>
  import("./eventz/eventz.component").then((c) =>
   c.EventzComponent), canActivate: [authGuard] },
  {path:'alerts', loadComponent: ()=>
  import("./features/timeline/timeline.component").then((c) =>
   c.TimelineComponent), canActivate: [authGuard] },
  {path: 'statistics', component:StatisticsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];
