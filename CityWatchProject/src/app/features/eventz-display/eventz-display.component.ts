import { Component, OnInit } from '@angular/core';
import { Event } from '../../shared/models/event';
import { EventzComponent } from '../../shared/components/eventz/eventz.component';
import { EventService } from '../../core/services/event.service';
import { PaginationComponent } from '../../pagination/pagination.component';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-eventz-display',
  standalone: true,
  imports: [EventzComponent, PaginationComponent],
  templateUrl: './eventz-display.component.html',
  styleUrl: './eventz-display.component.css'
})
export class EventzDisplayComponent implements OnInit {
events: Event[]=[]
currentPage: number = 1;
itemsPerPage: number = 18;




constructor(private eventService:EventService, private router:Router, private route:ActivatedRoute){}

ngOnInit(): void {
  this.eventService.getEvents().subscribe({
    next: (events:Event[])=>{
      this.events=events
    },
    error: (error:any) =>{
      console.error("Error fetching timeline events", error)
    }
  })

this.route.queryParams.subscribe(params=>{
    const page=params['page'] ? Number(params['page']) :1

  })

}





get paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.events.slice(startIndex, endIndex);
}

onPageChange(pageNumber: number) {
  this.currentPage = pageNumber;
  this.router.navigate([], {
    relativeTo:this.route,
    queryParams: {page:this.currentPage +1},
    queryParamsHandling: 'merge'
}) }

pages(): number[] {
  const totalItems = this.events.length;
const totalPages = Math.ceil(totalItems / this.itemsPerPage);
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  return pagesArray;
}

totalPages(): number {
  return this.pages().length;
}
}

