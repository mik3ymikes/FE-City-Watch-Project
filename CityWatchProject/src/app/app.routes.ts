import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';
import { AddEventComponent } from './add-event/add-event.component';
import { ViewAttendeesComponent } from './view-attendees/view-attendees.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditAlertComponent } from './edit-alert/edit-alert.component';


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
  {
    path: 'add-event',
    loadComponent: () => import('./add-event/add-event.component').then((c) =>
    c.AddEventComponent), canActivate: [authGuard]
  },
  {
  path: 'add-alert',
  loadComponent: () => import('./add-alert/add-alert.component').then((c) =>
  c.AddAlertComponent), canActivate: [authGuard]
 },
 { path: 'view-attendees/:id', component: ViewAttendeesComponent, canActivate: [authGuard]},
 { path: 'edit-event/:id', component: EditEventComponent, canActivate: [authGuard]},
 { path: 'edit-alert/:id', component: EditAlertComponent, canActivate: [authGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];
