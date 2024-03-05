import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { Router } from '@angular/router';

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

  constructor(private authService:AuthenticationService, private router:Router){}



  signupForm: FormGroup=new FormGroup({
    username:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required),
    password_confirmation:new FormControl('', Validators.required),
    email:new FormControl('', Validators.required),
    zipcode:new FormControl('', Validators.required),

  })


  onSignup(){
    const formValue=this.signupForm.value
     this.authService.signup(formValue).subscribe({
      next: (res:any)=>{
        this.router.navigate(['/login'])
      },
      error: (error:any) =>{
        console.log(error.error)
        this.errors=error.error
      }
     })
   }




close(){
  this.router.navigate(['home']);
}


}




