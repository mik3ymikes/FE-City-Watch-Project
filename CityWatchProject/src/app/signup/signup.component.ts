import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})


export class SignupComponent{
  isError:boolean=false
  constructor(private router:Router){}



  loginForm: FormGroup=new FormGroup({
    username:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required),





  })

close(){
  this.router.navigate(['home']);
}


}
//   login(){
//     if(this.loginForm.valid){
//       const username=this.loginForm.value.username;
//       const password=this.loginForm.value.password;

//       this.authService.login(username, password).subscribe({
//         next: (res:any)=>{
//               console.log(res);
//               this.authService.setToken(res.token)
//               this.router.navigate(['/'])
//         },
//         error: (error:any) =>{
//           console.log("Error when logging in", error )
//           this.isError=true
//         }
//       })
//     }
//   }
// }
