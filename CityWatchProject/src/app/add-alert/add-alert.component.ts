import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from '../core/services/alert.service';
import { Alert } from '../shared/models/alert';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-add-alert',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingSpinnerComponent],
  templateUrl: './add-alert.component.html',
  styleUrl: './add-alert.component.css'
})
export class AddAlertComponent {
  isError:boolean=false
  errors:string[]=[]
  isLoading=false
  selectedFile: File | null = null;

  constructor(private authService:AuthenticationService, private router:Router, private alertService:AlertService){}


  addEventForm=new FormGroup({
    content:new FormControl('', [Validators.required, Validators.maxLength(100)]),
    title:new FormControl('', [Validators.required, Validators.maxLength(50)]),
    // cover_image: new FormControl(null), // Make it optional
    // cover_image: new FormControl('', Validators.required)

  })

  onSubmit(){
    console.log('FormGroup:', this.addEventForm.value);
    // if (this.addEventForm.valid && this.selectedFile) {

      const formData:any = new FormData();
      formData.append('content', this.addEventForm.get('content')!.value)
      // formData.append('start_date_time', this.addEventForm.get('start_date_time')!.value)
      // formData.append('end_date_time', this.addEventForm.get('end_date_time')!.value)
      formData.append('title', this.addEventForm.get('title')!.value)
      // formData.append('cover_image', this.selectedFile, this.selectedFile!.name);
      // console.log(this.selectedFile)


      // const formValue=this.addEventForm.value
      this.isLoading=true
      // console.log(formValue)
      this.alertService.createAlert(formData).subscribe({
        next: (event:Alert)=>{
        console.log('FormData:', formData)
        // next: ()=>{
        console.log('alert created', alert)
        this.router.navigate(['/alerts'])
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
  this.router.navigate(['/alerts']);
}



// onFileSelected(alert: any) {
//   if (alert.target.files && alert.target.files[0]) {
//     this.selectedFile = alert.target.files[0];

//   }
// }









}
