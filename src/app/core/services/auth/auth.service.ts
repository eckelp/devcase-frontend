import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  public isAuthenticated(): boolean {
    return !!this.userService.getUser();
  }

  public authenticate(user: User): Observable<User> {

    const headers: HttpHeaders = this.generateHeader(user);

    return this.http.post<User>("http://localhost:8080/auth", {}, { headers })
      .pipe(
        tap((response: User) => {
          this.userService.setUser(user);
        })
      );

  }

  private generateHeader(user: User): HttpHeaders {
    return new HttpHeaders(
      user ? {
        authorization: 'Basic ' + btoa(user.username + ':' + user.password)
      }
        : {});
  }

  public headerFromLoggedInUser(): HttpHeaders {
    const user = this.userService.getUser();

    return this.generateHeader(user);

  }



}
