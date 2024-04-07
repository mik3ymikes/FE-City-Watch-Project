import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../../models/alert';
import { DatePipe, NgFor, NgStyle } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [DatePipe, NgStyle, NgFor],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {

 currentUser: User | null = new User ({})


 constructor(private userService: UserService, private alertService:AlertService,
  private router:Router, private route:ActivatedRoute){}



ngOnInit(): void {



  this.userService.currentUserBehaviorSubject.subscribe(()=>{
  this.currentUser=this.userService.currentUserBehaviorSubject.value

  })

}





editPage(){
  this.router.navigate(['/edit-alert', this.alert.id])
}

toComments(){
  this.router.navigate(['/comments-alert', this.alert.id])
}



@Input({required:true}) alert:Alert=new Alert()



// getColor(index:number): string {
//   // Use the modulus operator to determine the color based on the index
//   const colors = ['bg-dark', 'bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger'];
//   return colors[index % colors.length];

// }
}
