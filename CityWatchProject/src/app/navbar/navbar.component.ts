import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { AuthenticationService } from '../core/services/authentication.service';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, AlertComponent, LoadingSpinnerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLoading = false;
  isNavbarActive=false;


  constructor(private authService:AuthenticationService, private router:Router){}


  isLoggedIn(){
  
    return this.authService.isLoggedIn()
  }


  logout(){
    this.authService.logout()
    this.router.navigate(['/']);
    this.isLoading=true

    // setTimeout(() => {
    //   this.isLoading = false; // Set loading to false after the timeout
    // }, 300);
  }


  toggleNav(){
    this.isNavbarActive=!this.isNavbarActive
  }

}
