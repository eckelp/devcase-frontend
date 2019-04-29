import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';


const USER_KEY = "API_USER";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public setUser(user: User) {
    this.storage().setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): User {
    return JSON.parse(this.storage().getItem(USER_KEY));
  }

  private storage() {
    return window.localStorage;
  }

}
