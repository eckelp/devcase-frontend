
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../../shared/models/cliente';
import { WsService } from './../../core/services/ws/ws.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }


  public getAll(): Observable<Cliente[]> {

    const headers = this.auth.headerFromLoggedInUser();

    return this.http.get<Cliente[]>(WsService.getBaseUrl() + "/clientes", { headers });
  }

  public getById(id: number): Observable<Cliente> {

    const headers = this.auth.headerFromLoggedInUser();

    return this.http.get<Cliente>(WsService.getBaseUrl() + "/clientes/" + id, { headers });

  }

  public salvar(cliente: Cliente): Observable<Cliente> {
    const headers = this.auth.headerFromLoggedInUser();

    return this.http.post<Cliente>(WsService.getBaseUrl() + "/clientes", cliente, { headers });
  }

}
