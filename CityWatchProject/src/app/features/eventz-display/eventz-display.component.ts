import { Component, OnInit } from '@angular/core';
import { Event } from '../../shared/models/event';
import { EventzComponent } from '../../shared/components/eventz/eventz.component';
import { EventService } from '../../core/services/event.service';
import { PaginationComponent } from '../../pagination/pagination.component';



@Component({
  selector: 'app-eventz-display',
  standalone: true,
  imports: [EventzComponent, PaginationComponent ],
  templateUrl: './eventz-display.component.html',
  styleUrl: './eventz-display.component.css'
})
export class EventzDisplayComponent implements OnInit {
events: Event[]=[]



constructor(private eventService:EventService){}

ngOnInit(): void {
  this.eventService.getEvents().subscribe({
    next: (events:Event[])=>{
      this.events=events
    },
    error: (error:any) =>{
      console.error("Error fetching timeline events", error)
    }
  })


}
}
