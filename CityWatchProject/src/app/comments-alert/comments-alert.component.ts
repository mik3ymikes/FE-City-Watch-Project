import { Component, OnInit } from '@angular/core';
import { Alert } from '../shared/models/alert';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';
import { AlertService } from '../core/services/alert.service';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-comments-alert',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './comments-alert.component.html',
  styleUrl: './comments-alert.component.css'
})
export class CommentsAlertComponent implements OnInit {
  alert:Alert = new Alert ()
  currentPage: number = 1;
  totalPages:number=0;
  itemsPerPage: number = 21;

  constructor(private authService:AuthenticationService, private route:ActivatedRoute,
    private router:Router, private alertService:AlertService){}


  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.alertService.getAlert(params['id']).subscribe({
        next: (alert:Alert)=>{
            this.alert=alert
          },
        error:(error)=>{
          console.log(error)
        }
      })
      })
    }





    back(){
      this.router.navigate(['/alerts'])
    }


    // onPageChange(pageNumber: number) {
    //   this.currentPage = pageNumber;
    //   this.router.navigate([], {
    //     relativeTo:this.route,
    //     queryParams: {page:this.currentPage},
    //     queryParamsHandling: 'merge'
    //   }) }



    // nextPage(){
    //   if(this.currentPage<this.totalPages){
    //     this.router.navigate([], {
    //       relativeTo:this.route,
    //       queryParams: {page:this.currentPage +1},
    //       queryParamsHandling: 'merge'
    //     })
    //   }
    // }

    // previousPage(){
    //   if(this.currentPage>1){
    //     this.router.navigate([], {
    //       relativeTo:this.route,
    //       queryParams: {page:this.currentPage -1},
    //       queryParamsHandling: 'merge'
    //     })
    //   }
    // }


  }


