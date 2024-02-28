import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { LoadingSpinnerComponent } from '../../../shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingSpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  isLoading=false

  loginForm: FormGroup=new FormGroup({
    username:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required),

      })


  isError:boolean=false


 constructor(private authService:AuthenticationService, private router:Router){}

 login(){
   if(this.loginForm.valid){
     const username=this.loginForm.value.username;
     const password=this.loginForm.value.password;
     this.isLoading=true

     this.authService.login(username, password).subscribe({
       next: (res:any)=>{
       this.router.navigate(['/'])
       },
       error: (error:any) =>{
         console.log("Error when logging in", error )
         this.isError=true
         this.isLoading=false
       }
     })
   }
 }


close(){
  this.router.navigate(['home']);
}


}




