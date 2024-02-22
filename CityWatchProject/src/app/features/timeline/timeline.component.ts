import { Component } from '@angular/core';
import { Alert } from '../../shared/models/alert';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
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
