import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authURL = 'http://challenge-react.alkemy.org/';

  constructor(private httpClient: HttpClient) {}

  public login(login: Login): Observable<any> {
    return this.httpClient.post<any>(this.authURL, login);
  }
}
