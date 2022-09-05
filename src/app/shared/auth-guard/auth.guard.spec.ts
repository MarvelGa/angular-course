import {AuthService} from "../services/auth.service";
import {AuthGuard} from './auth.guard';
import {Route, Router, UrlSegment} from "@angular/router";

describe('AuthGuard (isolated)', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;
  let routerSpy: jasmine.SpyObj<Router>;
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
    authService = new AuthService();
    authGuard = new AuthGuard(authService, routerSpy);
  });

  it('should return false if user not is authenticated', () => {
    localStorage.removeItem('token');
    let path = "/courses"
    const fakeRoute: Route = {path};
    const fakeUrlSegment = {path} as UrlSegment;
    const canLoad = authGuard.canLoad(fakeRoute, [fakeUrlSegment]);
    expect(canLoad).toBeFalse();
  });

  it('should return true if user is authenticated', () => {
    localStorage.setItem('token', 'TOKEN');
    let path = "/courses"
    const fakeRoute: Route = {path};
    const fakeUrlSegment = {path} as UrlSegment;
    const canLoad = authGuard.canLoad(fakeRoute, [fakeUrlSegment]);
    expect(canLoad).toBeTrue();
  });
});

