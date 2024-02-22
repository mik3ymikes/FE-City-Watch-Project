import { Component, OnInit } from '@angular/core';
import { Alert } from '../../shared/models/alert';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit {

  alerts: Alert[]=[]

  constructor(private alertService:AlertService){}

ngOnInit(): void {
this.alertService.getTimeLineAlerts().subscribe({
  next: (alerts:Alert[])=>{
    this.alerts=alerts
  },
  error: (error:any) =>{
    console.error("Error fetching timeline posts", error)
  }
})
}
}
