import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/models/event';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';
import { DatePipe} from '@angular/common';
import { UserService } from '../core/services/user.service';
import { User } from '../shared/models/user';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { Comment } from '../shared/models/comment';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventService } from '../core/services/event.service';


@Component({
  selector: 'app-comments-event',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule, LoadingSpinnerComponent],
  templateUrl: './comments-event.component.html',
  styleUrl: './comments-event.component.css'
})
export class CommentsEventComponent {
  isError:boolean=false
  errors:string[]=[]
  isLoading=false
  currentUser: User | null = new User ({})
  event:Event=new Event()
  comment:Comment[]=[]
  isHidden=true;
  confirm=false
  selectedCommentId: string | number | null = null;


  constructor(private authService:AuthenticationService, private route:ActivatedRoute,
    private router:Router, private eventService:EventService, private userService:UserService){}

    ngOnInit(): void {
        this.route.params.subscribe((params)=>{
          this.eventService.getEvent(params['id']).subscribe({
            next: (event:Event)=>{
              this.event=event
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
        this.eventService.addComment(this.event.id, commentData).subscribe(
          (response) => {
            console.log('Comment added successfully:', response);
            this.addCommentForm.reset();
            this.isHidden=true;
            this.isLoading = false;
            this.isError = false;
            this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/comments-event', this.event.id]);
            });
            // this.router.navigate(['/comments-event', this.event.id]);
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

    }







    back(){
      this.router.navigate(['/events'])
    }


    addComment(){
      this.isHidden=false;
    }


    confirmComment(commentId: string | number) {
    this.selectedCommentId = commentId;
     this.confirm = true;
   }



    deleteComment(commentId:string | number){
      console.log(commentId)
      console.log("hey")
      this.eventService.deleteComment(this.event.id, commentId).subscribe({

        next: () => {
          console.log('Comment deleted successfully');
          const index = this.comment.findIndex(comment => comment.id === commentId);
          if (index !== -1) {
            this.comment.splice(index, 1);
          }
          this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/comments-event', this.event.id]);
          });
          // Optionally, you can navigate to a different route after deleting the comment
          // this.router.navigate(['/events']);
      },
      error: (error: any) => {
          console.error('Error deleting comment:', error);
          this.isError = true;
          this.errors = error.error;
          this.isLoading = false;
      }
  });
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

