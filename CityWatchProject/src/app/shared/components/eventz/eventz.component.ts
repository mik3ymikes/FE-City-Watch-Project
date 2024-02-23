import { Component, Input } from '@angular/core';
import { Event } from '../../models/event';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-eventz',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './eventz.component.html',
  styleUrl: './eventz.component.css'
})



export class EventzComponent {

  // may have to check this
  @Input({required:true}) event:Event=new Event({})
}
