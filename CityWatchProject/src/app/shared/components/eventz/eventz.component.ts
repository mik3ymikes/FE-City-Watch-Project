import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { DatePipe } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../../core/services/user.service';


@Component({
  selector: 'app-eventz',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './eventz.component.html',
  styleUrl: './eventz.component.css'
})



export class EventzComponent implements OnInit {
  currentUser: User | null = new User ({})
  constructor(private userService: UserService){}



ngOnInit(): void {
this.userService.currentUserBehaviorSubject.subscribe(()=>{
  // note that this may need to be CurrentUserSubject and not behavior
      this.currentUser=this.userService.currentUserBehaviorSubject.value
    })

}




  // may have to check this
  @Input({required:true}) event:Event= new Event( )
}

