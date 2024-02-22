import { Component, Input } from '@angular/core';
import { Alert } from '../../models/alert';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
@Input({required:true}) alert:Alert=new Alert({})
}
