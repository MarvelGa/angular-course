import { AuthService } from "./auth.service";

describe ('(AuthService)', ()=>{

  it ('should logIn', ()=>{
    const authService = new AuthService();
    spyOn(authService, "login");
    let userEmail = 'test@gmail.com';
    let userPassword = '11111';
    authService.login(userEmail, userPassword);
    expect(authService.login).toHaveBeenCalled()
  })

  it ('should return token if user is authenticated', ()=>{
    const authService = new AuthService();
    let JWT_TOKEN = 'JWT_TOKEN';
    localStorage.setItem('token', JWT_TOKEN)
    const result = authService.isAuthenticated()
    expect(result).toEqual(JWT_TOKEN);
  });

  it ('should return a info of user if user is authenticated', ()=>{
    const authService = new AuthService();
    let userEmail = 'test@gmail.com';
    let userPassword = '11111';
    let JWT_TOKEN = 'JWT_TOKEN';
    authService.login(userEmail, userPassword);
    const result = authService.getUserInfo(userEmail);
    expect(result[0].email).toEqual('test@gmail.com');
    expect(result[0].password).toEqual('11111');
    expect(result[0].token).toEqual(JWT_TOKEN);
  });

  it ('should logout of a user and erase a data of user from localstorage', ()=>{
    const authService = new AuthService();
    let userEmail = 'test@gmail.com';
    let userPassword = '11111';
    authService.login(userEmail, userPassword);
    authService.logout();
    expect(localStorage.getItem('token')).toEqual(null);
    expect(authService.userFakeListInStorage).toEqual([]);
  });
})
