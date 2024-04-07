import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../core/services/alert.service';
import { Alert } from '../shared/models/alert';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';



@Component({
  selector: 'app-edit-alert',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingSpinnerComponent],
  templateUrl: './edit-alert.component.html',
  styleUrl: './edit-alert.component.css'
})
export class EditAlertComponent implements OnInit {
  alert:Alert = new Alert ()
  isError:boolean=false
  errors:string[]=[]
  isLoading=false
  confirm=false


  constructor(private authService:AuthenticationService, private route:ActivatedRoute,
    private router:Router, private alertService:AlertService){}


    ngOnInit(): void {
      this.route.params.subscribe((params)=>{
        this.alertService.getAlert(params['id']).subscribe({
          next: (alert:Alert)=>{
              this.alert=alert
              // const formattedStartDate = new Date(alert.start_date_time).toISOString().slice(0, 16);
              // const formattedEndDate = new Date(alert.end_date_time).toISOString().slice(0, 16);
              this.addAlertForm.patchValue({
                content: alert.content,
                // start_date_time: formattedStartDate,
                // end_date_time: formattedEndDate,
                title: alert.title,

              });
            },
          error:(error)=>{
            console.log(error)
          }
        })
        })
      }


  addAlertForm=new FormGroup({
    content:new FormControl('', [Validators.required, Validators.maxLength(100)]),
    // start_date_time:new FormControl('', Validators.required),
    // end_date_time:new FormControl('', Validators.required),
    title:new FormControl('', [Validators.required, Validators.maxLength(50)]),
  })



  onEdit(){
    console.log('FormGroup:', this.addAlertForm.value);
    if (this.addAlertForm.valid) {

      const formData = new FormData();
      formData.append('content', this.addAlertForm.get('content')!.value!)
      // formData.append('start_date_time', this.addAlertForm.get('start_date_time')!.value!)
      // formData.append('end_date_time', this.addAlertForm.get('end_date_time')!.value!)
      formData.append('title', this.addAlertForm.get('title')!.value!)


      this.isLoading=true

      this.alertService.updateAlert(this.alert.id ,formData).subscribe({
        next: (alert:Alert)=>{
        console.log('FormData:', formData)
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
    }

   }

   confirmAlert(){
    this.confirm=true
   }


   deleteAlert(){
     console.log(this.alert.id)
    this.alertService.deleteAlert(this.alert.id).subscribe({


      next: ()=>{
      console.log('alert deleted', this.alert.id)
      this.router.navigate(['/alerts'])
    },
    error: (error:any) =>{
      console.log(error.error)
      this.isError=true
      this.errors=error.error
      this.isLoading=false
    }
   })
   }



close(){
  this.confirm=false
  this.router.navigate(['/alerts']);
}






}
