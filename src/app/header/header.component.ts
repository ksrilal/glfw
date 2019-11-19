import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../Pages/signin/signin.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  logdata: string ='';



  constructor( ) {
    if(localStorage.getItem('isLoggedIn') == 'true')
    {
      this.logdata = 'true';
    }
    else{
      this.logdata = 'false';
    }
}

  ngOnInit(){


  }

  getlogout()
  {
      localStorage.setItem('isLoggedIn', 'false');
  }




}
