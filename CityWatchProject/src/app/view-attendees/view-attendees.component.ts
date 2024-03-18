import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/models/event';
import { EventService } from '../core/services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-attendees',
  standalone: true,
  imports: [],
  templateUrl: './view-attendees.component.html',
  styleUrl: './view-attendees.component.css'
})
export class ViewAttendeesComponent implements OnInit {
event:Event = new Event ()


constructor(private route:ActivatedRoute, private eventService:EventService){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.eventService.getEvent(params['id']).subscribe({
        next: (event:Event)=>{
            this.event=event
            console.log(this.event)

        },
        error:(error)=>{
          console.log(error)
        }
      })
      })


}



}
