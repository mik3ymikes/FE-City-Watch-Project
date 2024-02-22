import { Component } from '@angular/core';
import { Alert } from '../shared/models/alert';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

  alerts: Alert[]=[
    new Alert({
      id:1,
      content: "content 1",
      createdAt: "2021-01-02",
      username: "mr pickles"
    })
  ]

  constructor(){}

}
