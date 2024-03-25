import { Component, OnInit } from '@angular/core';
import { Event } from '../../shared/models/event';
import { EventzComponent } from '../../shared/components/eventz/eventz.component';
import { EventService } from '../../core/services/event.service';
// import { PaginationComponent } from '../../pagination/pagination.component';
import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../../core/services/user.service';
// import { User } from '../../shared/models/user';




@Component({
  selector: 'app-eventz-display',
  standalone: true,
  imports: [EventzComponent],
  templateUrl: './eventz-display.component.html',
  styleUrl: './eventz-display.component.css'
})


export class EventzDisplayComponent implements OnInit {
events: Event[]=[]
// currentUser: User | null = new User ({})
// hasJoined: boolean = false
// totalPagesArray: number[] = [];
filteredEvents: Event[] = [];
currentPage: number = 1;
totalPages:number=0;
itemsPerPage: number = 21;


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





// get paginatedItems() {
//   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//   const endIndex = startIndex + this.itemsPerPage;
//   return this.events.slice(startIndex, endIndex);
// }

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
}
















//  this.route.queryParams.subscribe(params=>{
  //     this.currentPage=params['page'] ? Number(params['page']) :1



  // this.eventService.getEvents().subscribe({
    //   next: (events:Event[])=>{
      //     this.events=events
      //     this.filteredEvents = events;
  //     // console.log('get', this.events)
  //   },
  //   error: (error:any) =>{
    //     console.error("Error fetching timeline events", error)
    //   }
    // })
    // pages(): number[] {
      //   const totalItems = this.events.length;
      // const totalPages = Math.ceil(totalItems / this.itemsPerPage);
      //   const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
      //   return pagesArray;
      // }

    // totalPages(): number {
    //   return this.pages().length;
    // }
