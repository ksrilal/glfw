import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: any[];

  constructor(ticketService: TicketService) {
    ticketService.getAll().subscribe(events=>{
      this.events = events;
      // console.log(events);
    });
  }

  ngOnInit() {
  }

}
