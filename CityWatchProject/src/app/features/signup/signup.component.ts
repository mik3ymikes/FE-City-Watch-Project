import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})


export class SignupComponent{
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

