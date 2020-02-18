import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/login.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,

  ) {}
  returnUrl;
  ngOnInit() {
    // this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  login() {
    return this.loginService.login();

    // this.router.navigateByUrl(this.returnUrl);
  }
}
