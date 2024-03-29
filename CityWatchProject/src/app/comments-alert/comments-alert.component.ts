import { Component, OnInit } from '@angular/core';
import { Alert } from '../shared/models/alert';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';
import { AlertService } from '../core/services/alert.service';
import { DatePipe} from '@angular/common';
import { UserService } from '../core/services/user.service';
import { User } from '../shared/models/user';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { Comment } from '../shared/models/comment';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments-alert',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule, LoadingSpinnerComponent],
  templateUrl: './comments-alert.component.html',
  styleUrl: './comments-alert.component.css'
})



export class CommentsAlertComponent implements OnInit {
  isError:boolean=false
  errors:string[]=[]
  isLoading=false
  currentUser: User | null = new User ({})
  alert:Alert = new Alert ()
  comment:Comment[]=[]
  isHidden=true;
  confirm=false
  // currentPage: number = 1;
  // totalPages:number=0;
  // itemsPerPage: number = 21;

  constructor(private authService:AuthenticationService, private route:ActivatedRoute,
    private router:Router, private alertService:AlertService, private userService:UserService){}

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
          this.userService.currentUserBehaviorSubject.subscribe(()=>{
            this.currentUser=this.userService.currentUserBehaviorSubject.value

            })
        }


    addCommentForm=new FormGroup({
      content:new FormControl('', [Validators.required, Validators.maxLength(100)]),
    })



    onSubmit(){
      if (this.addCommentForm.valid) {
        const commentData: any = {
          content: this.addCommentForm.value.content,

        };

        this.isLoading = true;
        this.alertService.addComment(this.alert.id, commentData).subscribe(
          (response) => {
            console.log('Comment added successfully:', response);
            this.addCommentForm.reset();
            this.isHidden=true;
            this.isLoading = false;
            this.isError = false;
            this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/comments-alert', this.alert.id]);
            });
            // this.router.navigate(['/comments-alert', this.alert.id]);
          },
          (error) => {
            console.error('Error adding comment:', error);
            this.isLoading = false;
            this.isError = true;
          }
        );
      }

      }




    close(){
      this.isHidden=true
      this.confirm=false
      // this.router.navigate(['/comments-alert', this.alert.id]);
    }


    // comments-alert/:id





    back(){
      this.router.navigate(['/alerts'])
    }


    addComment(){
      this.isHidden=false;
    }


    confirmComment(){
      this.confirm=true
    }


    deleteComment(){
    //   this.alertService.deleteAlert(this.alert.id).subscribe({


    //     next: ()=>{
    //     // console.log('comment deleted', this.comment.id)
    //     this.router.navigate(['/alerts'])
    //   },
    //   error: (error:any) =>{
    //     console.log(error.error)
    //     this.isError=true
    //     this.errors=error.error
    //     this.isLoading=false
    //   }
    //  })
     }


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


  


