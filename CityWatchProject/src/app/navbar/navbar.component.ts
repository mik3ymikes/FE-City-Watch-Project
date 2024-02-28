import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { AuthenticationService } from '../core/services/authentication.service';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { User } from '../shared/models/user';
import { UserService } from '../core/services/user.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, AlertComponent, LoadingSpinnerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLoading = false;
  isNavbarActive=false;
  currentUser: User | null=null


  constructor(private authService:AuthenticationService, private router:Router, private userService:UserService){}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe((user)=>{
     this.currentUser= user
    })
   }




  isLoggedIn(){

    return this.authService.isLoggedIn()
  }


  logout(){
    this.authService.logout()
    this.router.navigate(['/']);
    this.isLoading=true
    this.userService.setCurrentUser(null)

    // setTimeout(() => {
    //   this.isLoading = false; // Set loading to false after the timeout
    // }, 300);
  }


  toggleNav(){
    this.isNavbarActive=!this.isNavbarActive
  }

}
