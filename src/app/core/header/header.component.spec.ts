import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {FormsModule} from "@angular/forms";
import {of} from "rxjs";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: AuthService;
  beforeEach(async () => {
    let user = {
      id: Date.now().toString(), email: 'test@gmail.com', password: 'password', token: 'JWT_TOKEN'
    };
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeaderComponent],
      providers: [
        {provide: Router, useValue: routerSpy},
        {
          provide: AuthService,
          useValue: {
            getUserInfo: () => [user],
            isAuthenticated: () => of(true),
            logout: () => of(true),
            currentUserEmail: () => of('test@gmail.com')
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke "logout" method of AuthService and navigate to "login" page', () => {
    component.logout();
    let router = fixture.debugElement.injector.get(Router);
    const spy = router.navigate as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should navigate by the url')
      .toEqual(['login']);
  });

  it('should get user info', () => {
    component.userEmail = 'test@gmail.com';
    localStorage.setItem('email', 'test@gmail.com');
    let result = component.getUserInfo();
    expect(result).toEqual('test@gmail.com');
    localStorage.removeItem('email');
  });

});
