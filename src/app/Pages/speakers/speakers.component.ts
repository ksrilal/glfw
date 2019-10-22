import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers: any[];

  constructor(speakerService: SpeakerService) {
     speakerService.getAll().subscribe(speakers=>{

      this.speakers=speakers; 

    });
   }

  ngOnInit() {
  }




}
