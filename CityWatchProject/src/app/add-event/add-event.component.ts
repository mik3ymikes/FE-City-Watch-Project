import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { Router } from '@angular/router';
import { EventService } from '../core/services/event.service';
import { Event } from '../shared/models/event';



@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  isError:boolean=false
  errors:string[]=[]


  constructor(private authService:AuthenticationService, private router:Router, private eventService:EventService){}


  addEventForm=new FormGroup({
    title:new FormControl('', [Validators.required]),
    start_date_time:new FormControl('', [Validators.required]),
    end_date_time:new FormControl('', [Validators.required]),
    content:new FormControl('', [Validators.required]),

  })


  onAddEvent(){
    const formValue=this.addEventForm.value
    console.log(formValue)
    this.eventService.createEvent(formValue).subscribe({
      next: (event:Event)=>{
        console.log('event created', event)
        this.router.navigate(['/events'])
      },
      error: (error:any) =>{
        console.log(error.error)
        this.errors=error.error
      }
     })
   }


  //  onAddEvent(){
  //   const formValue=this.signupForm.value
  //    this.authService.signup(formValue).subscribe({
  //     next: (res:any)=>{
  //       this.router.navigate(['/'])
  //     },
  //     error: (error:any) =>{
  //       console.log(error.error)
  //       this.errors=error.error
  //     }
  //    })
  //  }



close(){
  this.router.navigate(['/events']);
}


}




