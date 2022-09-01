import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userEmail = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getUserAuthentication() {
    this.userEmail = this.authService.currentUserEmail;
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.userEmail = ''
    this.authService.logout();
    this.router.navigate(['login'])
  }

  getUserInfo() {
    let userData = localStorage.getItem('email');
    if (userData!=null){
      return this.authService.getUserInfo(userData)[0].email;
    }
  }
}


