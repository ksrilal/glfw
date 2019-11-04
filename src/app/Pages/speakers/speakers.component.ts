import { Component, OnInit } from '@angular/core';
import { SpeakersService } from 'src/app/speakers.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers: any[];

  constructor(speakersSevice: SpeakersService) {
    speakersSevice.getAll().subscribe(speakers=>{
      this.speakers  = speakers;
    }
      )
  }

  ngOnInit() {
  }




}
