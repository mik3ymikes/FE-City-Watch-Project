import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { LoginComponent } from './features/timeline/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';


export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path:'events', loadComponent: ()=>
  import("./features/eventz-display/eventz-display.component").then((c) =>
   c.EventzDisplayComponent), canActivate: [authGuard] },
  {path:'alerts', loadComponent: ()=>
  import("./features/timeline/timeline.component").then((c) =>
   c.TimelineComponent), canActivate: [authGuard] },
  {path: 'statistics', component:StatisticsComponent},
  {path: 'login', component:LoginComponent, canActivate: [noAuthGuard]},
  {path: 'signup', component:SignupComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];
