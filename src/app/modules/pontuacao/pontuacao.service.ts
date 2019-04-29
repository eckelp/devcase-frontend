import { Pontuacao } from './../../shared/models/pontuacao';
import { AuthService } from './../../core/services/auth/auth.service';
import { WsService } from './../../core/services/ws/ws.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PontuacaoService {

  constructor(
    private auth: AuthService,
    private http: HttpClient) { }

  public getAll(): Observable<Pontuacao[]> {

    const headers = this.auth.headerFromLoggedInUser();

    return this.http.get<Pontuacao[]>(WsService.getBaseUrl() + "/pontuacoes", { headers })
  }

  public getById(id: number): Observable<Pontuacao> {

    const headers = this.auth.headerFromLoggedInUser();

    return this.http.get<Pontuacao>(WsService.getBaseUrl() + "/pontuacoes/" + id, { headers });

  }

  public salvar(pontuacao: Pontuacao): Observable<Pontuacao> {
    const headers = this.auth.headerFromLoggedInUser();

    return this.http.post<Pontuacao>(WsService.getBaseUrl() + "/pontuacoes", pontuacao, { headers });
  }

}
