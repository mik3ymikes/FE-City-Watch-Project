import { Component, OnInit } from '@angular/core';
import { Event } from '../../shared/models/event';
import { EventzComponent } from '../../shared/components/eventz/eventz.component';
import { EventService } from '../../core/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-eventz-display',
  standalone: true,
  imports: [EventzComponent, FormsModule],
  templateUrl: './eventz-display.component.html',
  styleUrl: './eventz-display.component.css'
})


export class EventzDisplayComponent implements OnInit {
events: Event[]=[]
// currentUser: User | null = new User ({})
// hasJoined: boolean = false
filteredEvents: Event[] = [];
currentPage: number = 1;
totalPages:number=0;
itemsPerPage: number = 21;
searchText: string = '';



constructor(private eventService:EventService,
  private router:Router, private route:ActivatedRoute,
  // private userService:UserService
  )
  {}

  ngOnInit(): void {
  this.route.queryParams.subscribe(params=>{
      const page=params['page'] ? Number(params['page']) :1
      this.loadEvents(page)


    })



}

addEvent(){
  this.router.navigate(['/add-event']);
}



onPageChange(pageNumber: number) {
  this.currentPage = pageNumber;
  this.router.navigate([], {
    relativeTo:this.route,
    queryParams: {page:this.currentPage},
    queryParamsHandling: 'merge'
  }) }


  filterResults(text: string) {
    if (!text) {
      this.filteredEvents = this.events;
      return;
    }

    this.filteredEvents = this.events.filter(
      event => event?.title.toLowerCase().includes(text.toLowerCase()) ||
      event?.content.toLowerCase().includes(text.toLowerCase())
    );
  }




  loadEvents(page:number){
    this.eventService.getEvents(page).subscribe({
      next: (response:any) =>{
        this.events=response.events;
        this.filteredEvents=this.events
        console.log(this.filteredEvents)
        this.currentPage=response.current_page;
        this.totalPages=response.total_pages;
        // this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      error: (error:any) =>{
        console.error("errror fetching events", error)
      }
    })
  }



  nextPage(){
    if(this.currentPage<this.totalPages){
      this.router.navigate([], {
        relativeTo:this.route,
        queryParams: {page:this.currentPage +1},
        queryParamsHandling: 'merge'
      })
    }
  }

  previousPage(){
    if(this.currentPage>1){
      this.router.navigate([], {
        relativeTo:this.route,
        queryParams: {page:this.currentPage -1},
        queryParamsHandling: 'merge'
      })
    }
  }


  back(){
    this.filteredEvents=this.events
    this.searchText=''

   }
}















