import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Output() authenticationEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  isUserAuthenticated = false;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login();
    this.isUserAuthenticated = true;
    this.authenticationEvent.emit(this.isUserAuthenticated);
  }
}
