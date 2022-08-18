import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  isUserAuthenticated = false;

   login(){
     console.log('logged in successfully');
     this.isUserAuthenticated=true;
   }

   logout(){

   }

  isAuthenticated(){
    return this.isUserAuthenticated;
  }

  getUserInfo(){

  }
}
