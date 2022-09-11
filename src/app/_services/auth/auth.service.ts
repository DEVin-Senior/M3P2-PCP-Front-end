import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { User } from 'src/app/components/user/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL : string = environment.apiBaseURL + "loginRegister";
  tokenFullUrl : string = environment.apiBaseURL + environment.tokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();
  isLoggedIn = false;

  user: User = new User();

  constructor(
    private http: HttpClient, 
  ) { }

  getToken(){
    const tokenString = localStorage.getItem('access_token');
    if(tokenString){
      const token = JSON.parse(tokenString).access_token;
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if(token){
      const isExpired = this.jwtHelper.isTokenExpired(token);
      return !isExpired;
    }
    return this.isLoggedIn;
  }

  saveUser(user: User) : Observable<any>{
    console.log(`Name: ${user.name} User AUTHSERVICE: ${user.email}, Password: ${user.password}`);
      let bodyString = JSON.stringify(user);
      let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
      return this.http.post<any>(this.apiURL, bodyString, { headers: headers });
  }

  login(username: string, password: string) : Observable<any>{
    const params = new HttpParams()
                  .set('username', username)
                  .set('password', password)
                  .set('grant_type', 'password');

    const headers = {
      'Authorization' : 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.tokenFullUrl, params, { headers })
  }
  
}