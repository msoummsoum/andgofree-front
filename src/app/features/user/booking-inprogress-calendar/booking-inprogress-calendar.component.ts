import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking-inprogress-calendar',
  imports: [FullCalendarModule,RouterLink],
  templateUrl: './booking-inprogress-calendar.component.html',
  styleUrl: './booking-inprogress-calendar.component.scss'
})
export class BookingInprogressCalendarComponent {
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
