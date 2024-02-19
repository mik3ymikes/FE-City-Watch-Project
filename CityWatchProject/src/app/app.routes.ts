import { Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EventzComponent } from './eventz/eventz.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'events', component: EventzComponent},
  {path:'alerts', component:AlertsComponent},
  {path: 'statistics', component:StatisticsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];
