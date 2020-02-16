import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../Pages/signin/signin.component";
import { LoginService } from "../login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  logdata: string = "";

  constructor(private loginService: LoginService) {
    if (localStorage.getItem("isLoggedIn") == "true") {
      this.logdata = "true";
    } else {
      this.logdata = "false";
    }
  }

  ngOnInit() {}

  getlogout() {
    this.loginService.SignOut();

    localStorage.setItem("isLoggedIn", "false");
  }
}
