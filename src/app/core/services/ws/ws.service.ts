import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  constructor() { }

  public static getBaseUrl() {
    return "http://localhost:8080";
  }

}
