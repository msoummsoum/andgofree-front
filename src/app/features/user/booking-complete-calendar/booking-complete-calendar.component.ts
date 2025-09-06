import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking-complete-calendar',
  imports: [FullCalendarModule,RouterLink],
  templateUrl: './booking-complete-calendar.component.html',
  styleUrl: './booking-complete-calendar.component.scss'
})
export class BookingCompleteCalendarComponent {
  routes = routes 
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };
}
