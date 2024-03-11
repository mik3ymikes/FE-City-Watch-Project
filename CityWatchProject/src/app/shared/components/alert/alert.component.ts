import { Component, Input } from '@angular/core';
import { Alert } from '../../models/alert';
import { DatePipe, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [DatePipe, NgStyle, NgFor],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
@Input({required:true}) alert:Alert=new Alert({})



// getColor(index:number): string {
//   // Use the modulus operator to determine the color based on the index
//   const colors = ['bg-dark', 'bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger'];
//   return colors[index % colors.length];

// }
}
