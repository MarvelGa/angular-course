import {Injectable} from "@angular/core";
import {userList} from "../../assets/fake-user-data";
import {UserInterface} from "../types/user.interface";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userFakeListInStorage: any = JSON.parse(localStorage.getItem('setOfFakeUser') || '{}') || [];

  isUserAuthenticated = false;
  private foundedUser: any;

  constructor() {
  }

  login(email: string, password: string): void {
    console.log('logged in successfully');
    this.isUserAuthenticated = true;

    if (email.trim().length > 0 && password.trim().length > 0) {
      let user = {id: Date.now().toString(), email: email, password: password};
      if (!this.userFakeListInStorage.find((el: { email: string; }) => el.email === email)) {
        console.log(this.userFakeListInStorage)
        this.userFakeListInStorage.push(user);
        localStorage.setItem('setOfFakeUser', JSON.stringify(this.userFakeListInStorage))
      }
    }

  }

  logout() {
  }

  isAuthenticated() {
    return this.isUserAuthenticated;
  }

  getUserInfo(id: string) {
    this.foundedUser = userList.find(el => el.id === id);
    return this.foundedUser.email;

  }
}
