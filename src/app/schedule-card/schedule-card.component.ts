
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class ScheduleCardComponent implements OnInit {

  @Input ('event') event;

  constructor() { }

  ngOnInit() {
  }

  // state: boolean;
  // statusClick(event: Event) {
  //   this.state =false;
  //   //console.log('CLICK!', event)
  // }
  


}
