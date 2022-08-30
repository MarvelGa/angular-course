import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = ''

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password);
    console.log(this.email);
    console.log(this.password);
  }

}
