// import { NgFor } from '@angular/common';
// import { Component, Input, OnInit} from '@angular/core';
// import { EventService } from '../core/services/event.service';
// import { Event } from '../shared/models/event';

// @Component({
//   selector: 'app-pagination',
//   standalone: true,
//   imports: [NgFor],
//   templateUrl: './pagination.component.html',
//   styleUrl: './pagination.component.css'
// })




// export class PaginationComponent implements OnInit {


//   items: Event[] = [];
//   currentPage: number = 1;
//   itemsPerPage: number = 10;

//   constructor(private eventService:EventService){}

//   ngOnInit(): void {
//     this.eventService.getEvents().subscribe({
//       next:(items:Event[])=>{
//         this.items=items
//       },
//       error: (error:any) =>{
//         console.error("Error fetching timeline items", error)
//       }
//     })


//   }



//   get paginatedItems() {
//     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//     const endIndex = startIndex + this.itemsPerPage;
//     return this.items.slice(startIndex, endIndex);
//   }

//   onPageChange(pageNumber: number) {
//     this.currentPage = pageNumber;
//   }

//   pages(): number[] {
//     const totalItems = this.items.length;
//   const totalPages = Math.ceil(totalItems / this.itemsPerPage);
//     const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
//     return pagesArray;
//   }

//   totalPages(): number {
//     return this.pages().length;
//   }

// }
