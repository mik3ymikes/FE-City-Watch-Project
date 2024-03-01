import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';
import { UserService } from '../core/services/user.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  currentUser: User | null=null
  baseMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102973.5592696297!2d-90.13839576409902!3d36.241346746660696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d613fe4cc1ca4f%3A0x35b6a123d2cfd2a1!2sKennett%2C%20MO%2063857!5e0!3m2!1sen!2sus!4v1709323281468!5m2!1sen!2sus';


  constructor(private authService:AuthenticationService, private userService:UserService){}


  isLoggedIn(){

    return this.authService.isLoggedIn()
  }


  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe((user)=>{
     this.currentUser= user
    })
   }

}
