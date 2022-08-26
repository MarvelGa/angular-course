import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-app';

  constructor(private authService: AuthService) {
  }

  getUserAuthentication(){
   return this.authService.isUserAuthenticated;
  }
}
