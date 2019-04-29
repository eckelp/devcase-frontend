import { Cidade } from '../models/cidade';
import { AuthService } from './../../core/services/auth/auth.service';
import { WsService } from './../../core/services/ws/ws.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public getAll(): Observable<Cidade[]> {

    const headers = this.authService.headerFromLoggedInUser();

    return this.http.get<Cidade[]>(WsService.getBaseUrl() + "/cidades", { headers })

  }




}
