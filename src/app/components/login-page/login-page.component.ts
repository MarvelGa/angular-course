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
  email = '';
  password = ''
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password);
    this.isUserAuthenticated = true;
    this.authenticationEvent.emit(this.isUserAuthenticated);
    console.log(this.email);
    console.log(this.password);
  }
}
