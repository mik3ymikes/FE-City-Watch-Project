import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { AuthenticationService } from '../core/services/authentication.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, AlertComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isNavbarActive=false;

  constructor(private authService:AuthenticationService, private router:Router){}


  isLoggedIn(){
    return this.authService.isLoggedIn()
  }


  logout(){
    this.authService.logout()
    this.router.navigate(['/']);
  }


  toggleNav(){
    this.isNavbarActive=!this.isNavbarActive
  }

}
