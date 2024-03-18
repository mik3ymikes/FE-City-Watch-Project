import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { DatePipe } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../../core/services/user.service';
import {FormsModule } from '@angular/forms';
import { EventService } from '../../../core/services/event.service';


@Component({
  selector: 'app-eventz',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './eventz.component.html',
  styleUrl: './eventz.component.css'
})



export class EventzComponent implements OnInit {
  // @Input() eventId: string | number = '';
  toggleAttending:boolean=false
  hasJoined: boolean =false
  currentUser: User | null = new User ({})
  constructor(private userService: UserService, private eventService:EventService){}


  ngOnInit(): void {
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

    this.userService.currentUserBehaviorSubject.subscribe(()=>{
      // note that this may need to be CurrentUserSubject and not behavior
      this.currentUser=this.userService.currentUserBehaviorSubject.value
      // this.hasJoined=event.has_joined
    })


  }

  // toggleJoinEvent(){}




  toggleJoinEvent() {
    this.hasJoined = this.toggleAttending; // Set hasJoined based on toggleAttending value
    const eventId = this.event.id; // Get the event ID

    const eventJoin$ = this.hasJoined
      ? this.eventService.joinEvent(eventId) // Join the event if hasJoined is true
      : this.eventService.leaveEvent(eventId); // Leave the event if hasJoined is false

    eventJoin$.subscribe({
      next: () => {
        // Toggle hasJoined after the API call is successful
        this.hasJoined = !this.hasJoined;
      },
      error: (error) => {
        console.log(error);
      }
    });
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



  //   toggleJoinEvent(){
  //     const eventJoin$=this.toggleAttending ? this.eventService.leaveEvent(this.event.id) :
  //     eventJoin$.subscribe({
  //         next: ()=>{
  //             this.hasJoined=!this.hasJoined
  //   },
  //   error: (error) =>{
  //     console.log(error)
  //   }
  // })
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






// may have to check this
@Input({required:true}) event:Event= new Event( )






}








