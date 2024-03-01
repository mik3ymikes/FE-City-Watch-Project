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
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private alertService:AlertService,
    private router:Router, private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.queryParams.subscribe(params=>{
    this.currentPage=params['page'] ? Number(params['page']) :1
  })


this.alertService.getTimeLineAlerts().subscribe({
  next: (alerts:Alert[])=>{
    this.alerts=alerts

  },
  error: (error:any) =>{
    console.error("Error fetching timeline posts", error)
  }
})
}

get paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.alerts.slice(startIndex, endIndex);
}

onPageChange(pageNumber: number) {
  this.currentPage = pageNumber;
  this.router.navigate([], {
    relativeTo:this.route,
    queryParams: {page:this.currentPage},
    queryParamsHandling: 'merge'
}) }

pages(): number[] {
  const totalItems = this.alerts.length;
const totalPages = Math.ceil(totalItems / this.itemsPerPage);
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  return pagesArray;
}

totalPages(): number {
  return this.pages().length;
}
}




