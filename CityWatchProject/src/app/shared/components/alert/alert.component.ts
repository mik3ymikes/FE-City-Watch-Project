import { Component, Input } from '@angular/core';
import { Alert } from '../../models/alert';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
@Input({required:true}) alert:Alert=new Alert({})
}
