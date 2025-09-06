import { CommonModule } from '@angular/common';
import { routes } from '../../../shared/routes';
import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { DatePickerModule } from 'primeng/datepicker';
import {
  CalendarOptions,
  EventApi,
  DateSelectArg,
  EventClickArg,
  Calendar,
} from '@fullcalendar/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-calendar',
  imports: [
    CommonModule,MatSelectModule,DatePickerModule,FormsModule,RouterLink,BsDatepickerModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
 routes = routes
  showEventDetailsModal = false;
  eventDetails = { title: '' };
  date: Date[] | undefined;
  dropdownOpen = false;
  selectedTime: Date = new Date();
  addtime2: Date | undefined;
  addtime: Date | undefined;
  time: Date[] | undefined; 
  time2: Date[] | undefined; 
  bsInlineValue = new Date()
constructor(private router:Router){}
  ngOnInit(): void {}
    // Open the dropdown
    openDropdown() {
      this.dropdownOpen = true;
    }

    // Close the dropdown
    closeDropdown() {
      this.dropdownOpen = false;
    }

    // Update displayed time when selection changes
    onTimeChange() {
      this.closeDropdown(); // Close dropdown after time selection
    }
  ngAfterViewInit(): void {
    // Initialize FullCalendar
    const calendarEl = document.getElementById('calendar');
    const calendar = new Calendar(calendarEl!, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      editable: true,
      droppable: true, // Enable drag and drop
      events: [
        {
          title: 'Francis Harris',
          className: 'badge badge-pink-transparent',
          backgroundColor: '#D9F1E0',
          textColor: '#111827',
          start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
        },
        {
          title: 'Reuben Keen',
          className: 'badge badge-secondary-transparent',
          backgroundColor: '#EDF2F4',
          textColor: '#0C4B5E',
          start: new Date(Date.now() + 338000000).toISOString().slice(0, 10),
        },
        {
          title: 'Wiliam Jones',
          className: 'badge badge-purple-transparent',
          backgroundColor: '#F7EEF9',
          textColor: '#AB47BC',
          start: new Date(Date.now() - 338000000).toISOString().slice(0, 10),
        },
        {
          title: 'Jay Beckman',
          className: 'badge badge-danger-transparent',
          backgroundColor: '#FAE7E7',
          textColor: '#E70D0D',
          start: new Date(Date.now() + 88000000).toISOString().slice(0, 10),
        },
        {
          title: 'William Ward',
          className: 'badge badge-danger-transparent',
          backgroundColor: ' #E8E9EA',
          textColor: '#212529',
          start: new Date(Date.now() + 88000000).toISOString().slice(0, 10),
        },
      ],
      headerToolbar: {
        start: 'today prev,next',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      eventClick: this.handleEventClick.bind(this),
      drop: (info) => {
        console.log('Event dropped:', info.draggedEl.innerText.trim());
      },
      eventReceive: (info) => {
        console.log('Event added:', info.event.title);
      },
    });

    calendar.render();
  }
  handleEventClick(info: EventClickArg) {

    
    this.eventDetails = {
      title: info.event.title
    };
    this.showEventDetailsModal = true;
  }
  handleEventDetailsClose() {
    this.showEventDetailsModal = false;
  }
  
  current:number=1
  next(): void {
    if(this.current<6){
    this.current+=1;
    }
  }
  previous():void{
    if(this.current>1){
      this.current-=1
    }
  }
  directPage():void{
    this.router.navigate ([routes.reservation]) 
  }
}
