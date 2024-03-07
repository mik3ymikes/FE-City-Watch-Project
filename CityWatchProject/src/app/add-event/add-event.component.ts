import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { Router } from '@angular/router';
import { EventService } from '../core/services/event.service';
import { Event } from '../shared/models/event';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { NgIf } from '@angular/common';
// import { Observable } from 'rxjs';



@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingSpinnerComponent, NgIf],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  isError:boolean=false
  errors:string[]=[]
  isLoading=false
  selectedFile: File | null =null
  
  constructor(private authService:AuthenticationService, private router:Router, private eventService:EventService){}


  addEventForm=new FormGroup({
    content:new FormControl('', [Validators.required, Validators.maxLength(100)]),
    start_date_time:new FormControl('', Validators.required),
    end_date_time:new FormControl('', Validators.required),
    title:new FormControl('', [Validators.required, Validators.maxLength(50)]),

  })


  onSubmit(){
    // if(this.addEventForm.valid){
    const formValue=this.addEventForm.value
    this.isLoading=true
    console.log(formValue)
    this.eventService.createEvent(formValue).subscribe({
      next: (event:Event)=>{
        console.log('event created', event)
        this.router.navigate(['/events'])
      },
      error: (error:any) =>{
        console.log(error.error)
        this.isError=true
        this.errors=error.error
        this.isLoading=false
      }
     })
    // }

    // this.eventService.createEvent(formValue).subscribe({
    //   next: () =>{
    //      this.router.navigate(['/events'])
    //   },
    //   error: (error)=>{
    //     console.log(error)
    //   }
    // })

   }


close(){
  this.router.navigate(['/events']);
}



onfileSelected(event:any){
  if(event.target.files && event.target.files[0]){
   this.selectedFile=event.target.files[0]
  }
}


}




