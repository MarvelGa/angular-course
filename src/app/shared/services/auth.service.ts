import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  userFakeListInStorage: any = JSON.parse(localStorage.getItem('setOfFakeUser') || '[]');
  currentUserEmail: string = '';
  isUserAuthenticated = false;

  constructor() {
  }

  login(email: string, password: string): void {
    console.log('logged in successfully');
    this.isUserAuthenticated = true;
    this.currentUserEmail = email;
    if (email.trim().length > 0 && password.trim().length > 0) {
      localStorage.setItem('token', this.JWT_TOKEN );
      let user = {id: Date.now().toString(), email: email, password: password, token: this.JWT_TOKEN};
      if (!this.userFakeListInStorage.find((el: { email: string; }) => el.email === email)) {
        console.log(this.userFakeListInStorage)
        this.userFakeListInStorage.push(user);
        localStorage.setItem('setOfFakeUser', JSON.stringify(this.userFakeListInStorage));
      }
    }
  }

  logout() {
    if (this.currentUserEmail.trim().length > 0) {
      console.log(`The user with login= ${this.currentUserEmail} is Logout`);
      this.userFakeListInStorage = this.userFakeListInStorage.filter((user: { email: string; }) => user.email !== this.currentUserEmail);
      localStorage.setItem('setOfFakeUser', JSON.stringify(this.userFakeListInStorage));
      localStorage.removeItem('token');
    }
  }

  isAuthenticated() {
    return localStorage.getItem('token');
  }

  getUserInfo(id: string) {
    return this.userFakeListInStorage.filter((user: { id: string; }) => user.id === id);
  }
}
