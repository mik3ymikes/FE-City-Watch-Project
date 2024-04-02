import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { DatePipe } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../../core/services/user.service';
import {FormsModule } from '@angular/forms';
import { EventService } from '../../../core/services/event.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-eventz',
  standalone: true,
  imports: [DatePipe, FormsModule, RouterLink],
  templateUrl: './eventz.component.html',
  styleUrl: './eventz.component.css'
})



export class EventzComponent implements OnInit {
  // @Input() eventId: string | number = '';


  hasJoined: boolean =false
  currentUser: User | null = new User ({})
  constructor(private userService: UserService, private eventService:EventService,
    private router:Router, private route:ActivatedRoute){}


  ngOnInit(): void {




    // const eventId = this.event.id;
    // console.log(eventId)
    // this.eventService.getEvent(eventId).subscribe({
    //   next: (event: Event) => {
    //     this.event = event;
    //     // this.toggleAttending = this.event.has_joined;
    //     this.hasJoined=event.has_joined
    //     console.log(this.hasJoined);
    //     console.log(this.event.has_joined)
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // });
    // this.eventService.getEvent('id').subscribe({
    //   next: (event:Event)=>{
      //       this.event=event
      //       // this.hasJoined=event.has_joined
      //       console.log(this.event)
      //       // prepare guests
      //       // this.prepareGuests()
      //   },
      //   error:(error)=>{
        //     console.log(error)
    //   }
    // })
    // this.hasJoined = this.event.has_joined
    // console.log(this.hasJoined)

    this.userService.currentUserBehaviorSubject.subscribe(()=>{
      // note that this may need to be CurrentUserSubject and not behavior
      this.currentUser=this.userService.currentUserBehaviorSubject.value
      // this.hasJoined=event.has_joined
    })


  }

  // toggleJoinEvent(){}




  toggleJoinEvent() {
    this.hasJoined=!this.hasJoined


    const eventId = this.event.id; // Get the event ID

    const eventJoin$ = this.hasJoined ? this.eventService.joinEvent(eventId) // Join the event if hasJoined is true
      : this.eventService.leaveEvent(eventId); // Leave the event if hasJoined is false



    eventJoin$.subscribe({
      next: () => {
        // Toggle hasJoined after the API call is successful
        // this.event.has_joined=
        this.hasJoined = !this.hasJoined;
        console.log(this.hasJoined)

        // this.event.has_joined=!this.event.has_joined
        // console.log(this.event.has_joined)
      },
      error: (error) => {
        console.log(error);
      }
    });
  }



  viewAttendees(){
    this.router.navigate(['/view-attendees', this.event.id])
  }


  editPage(){
    this.router.navigate(['/edit-event', this.event.id])
  }

  toComments(){
    this.router.navigate(['/comments-event', this.event.id])
  }


  // toggleJoinEvent() {
  //   this.hasJoined=this.toggleAttending
  //   // console.log(this.toggleAttending)
  //   console.log(this.event.id)
  //   console.log(this.hasJoined)
  //   const eventJoin$ = this.hasJoined
  //   ? this.eventService.leaveEvent(this.event.id)
  //   : this.eventService.joinEvent(this.event.id);

  //   eventJoin$.subscribe({
  //     next: () => {
  //       this.hasJoined=!this.hasJoined
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   });
  // }



  // toggleJoinEvent(){
    //   const eventJoin$=this.hasJoined ? this.eventService.leaveEvent(this.event.id) :
    //   eventJoin$.subscribe({
      //     next: ()=>{
        //       this.hasJoined=!this.hasJoined

        //       // prepare guests
        //       // if(this.currentUser){
          //       //   if(this.hasJoined){
            //       //     this.event.participants.push(this.currentUser)
//       //   } else{
//       //     this.event.participants = this.event.participants. filter((p) =>
//       //     p.id !== this.currentUser?.id)
//       //   }
//       //   this.prepareGuests()
//       // }
//     },
//     error: (error) =>{
//       console.log(error)
//     }
//   })
//   }

getTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';


  hours = hours % 12;
  hours = hours ? hours : 12;

  return hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
}



// may have to check this
@Input({required:true}) event:Event= new Event( )






}








