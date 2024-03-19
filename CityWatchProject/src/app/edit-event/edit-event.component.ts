import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../core/services/event.service';
import { Event } from '../shared/models/event';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingSpinnerComponent],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent implements OnInit {
  event:Event = new Event ()
  isError:boolean=false
  errors:string[]=[]
  isLoading=false
  selectedFile: File | null = null;


  constructor(private authService:AuthenticationService, private route:ActivatedRoute,
    private router:Router, private eventService:EventService){}


    ngOnInit(): void {
      this.route.params.subscribe((params)=>{
        this.eventService.getEvent(params['id']).subscribe({
          next: (event:Event)=>{
              this.event=event
              console.log(this.event)

          },
          error:(error)=>{
            console.log(error)
          }
        })
        })
      }


  addEventForm=new FormGroup({
    content:new FormControl('', [Validators.required, Validators.maxLength(100)]),
    start_date_time:new FormControl('', Validators.required),
    end_date_time:new FormControl('', Validators.required),
    title:new FormControl('', [Validators.required, Validators.maxLength(50)]),
    // cover_image: new FormControl(null), // Make it optional
    // cover_image: new FormControl('', Validators.required)

  })

  onSubmit(){
    console.log('FormGroup:', this.addEventForm.value);
    if (this.addEventForm.valid) {

      const formData = new FormData();
      formData.append('content', this.addEventForm.get('content')!.value!)
      formData.append('start_date_time', this.addEventForm.get('start_date_time')!.value!)
      formData.append('end_date_time', this.addEventForm.get('end_date_time')!.value!)
      formData.append('title', this.addEventForm.get('title')!.value!)

      if (!this.selectedFile) {
        console.log('Selected file is not defined');
        // Perform any additional actions or proceed accordingly
      } else {
        formData.append('cover_image', this.selectedFile, this.selectedFile.name);
        console.log(this.selectedFile);
        // Proceed with further actions when selectedFile is defined
      }



      // const formValue=this.addEventForm.value
      this.isLoading=true
      // console.log(formValue)
      this.eventService.createEvent(formData).subscribe({
        next: (event:Event)=>{
        console.log('FormData:', formData)
        // next: ()=>{
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
    }

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



onFileSelected(event: any) {
  if (event.target.files && event.target.files[0]) {
    this.selectedFile = event.target.files[0];

  }
}


}

