import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  events: any[];
  
  constructor(private ticketService: TicketService) {
    this.getFirst();

  }

  ngOnInit() {
  }

  getFirst(){
    this.ticketService.getAll(1).subscribe(events => {
      this.events = events;
      console.log(events);

    })
  }
  getSecond(){
    this.ticketService.getAll(2).subscribe(events => {
      this.events = events;
      console.log(events);

    })
  }

  getThird(){
    this.ticketService.getAll(3).subscribe(events => {
      this.events = events;
      console.log(events);

    })
  }

  getFourth(){
    this.ticketService.getAll(4).subscribe(events => {
      this.events = events;
      console.log(events);

    })
  }

  getFifth(){
    this.ticketService.getAll(5).subscribe(events => {
      this.events = events;
      console.log(events);

    })
  }

}
