import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent implements OnInit {

  @Input('speaker') speaker;

  constructor() { }

  ngOnInit() {
  }

}
