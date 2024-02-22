import { Component } from '@angular/core';
import { Alert } from '../../shared/models/alert';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

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
