import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  events: any[];
  
  constructor(ticketService: TicketService) {
    ticketService.getAll().subscribe(events => {
      this.events = events;

    })

  }

  ngOnInit() {
  }

}
