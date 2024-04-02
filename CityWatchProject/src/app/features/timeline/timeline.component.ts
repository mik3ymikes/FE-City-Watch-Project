import { Component, OnInit } from '@angular/core';
import { Alert } from '../../shared/models/alert';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { AlertService } from '../../core/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit {

  alerts: Alert[]=[]
  filteredAlerts: Alert[] = [];
  currentPage: number = 1;
  totalPages:number=0;
  itemsPerPage: number = 20;

  constructor(private alertService:AlertService,
    private router:Router, private route:ActivatedRoute){}

    ngOnInit(): void {

      this.route.queryParams.subscribe(params=>{
        const page=params['page'] ? Number(params['page']) :1
        this.loadAlerts(page)


      })

    }



  addAlert(){
  this.router.navigate(['/add-alert']);
}



onPageChange(pageNumber: number) {
  this.currentPage = pageNumber;
  this.router.navigate([], {
    relativeTo:this.route,
    queryParams: {page:this.currentPage},
    queryParamsHandling: 'merge'
  }) }




  loadAlerts(page:number){
    this.alertService.getAlerts(page).subscribe({
      next: (response:any) =>{
        this.alerts=response.alerts;
        this.filteredAlerts=this.alerts
        this.currentPage=response.current_page;
        this.totalPages=response.total_pages;
        // this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      error: (error:any) =>{
        console.error("errror fetching alerts", error)
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


  filterResults(text: string) {
    if (!text) {
      this.filteredAlerts = this.alerts;
      return;
    }

    this.filteredAlerts = this.alerts.filter(
      event => event?.title.toLowerCase().includes(text.toLowerCase()) ||
      event?.content.toLowerCase().includes(text.toLowerCase())
      );
    }


    back(){
     this.filteredAlerts=this.alerts
   
    }



}









































// get paginatedItems() {
//   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//   const endIndex = startIndex + this.itemsPerPage;
//   return this.alerts.slice(startIndex, endIndex);
// }

// onPageChange(pageNumber: number) {
//   this.currentPage = pageNumber;
//   this.router.navigate([], {
//     relativeTo:this.route,
//     queryParams: {page:this.currentPage},
//     queryParamsHandling: 'merge'
// }) }

// pages(): number[] {
//   const totalItems = this.alerts.length;
// const totalPages = Math.ceil(totalItems / this.itemsPerPage);
//   const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
//   return pagesArray;
// }

// totalPages(): number {
//   return this.pages().length;
// }
