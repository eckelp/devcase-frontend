import { Pontuacao } from './../../../shared/models/pontuacao';
import { Component, OnInit } from '@angular/core';
import { PontuacaoService } from '../pontuacao.service';

@Component({
  selector: 'app-pontuacao-list',
  templateUrl: './pontuacao-list.component.html',
  styleUrls: ['./pontuacao-list.component.css']
})
export class PontuacaoListComponent implements OnInit {

  pontuacoes: Pontuacao[];

  cols: any[];

  constructor(private clienteService: PontuacaoService) { }

  ngOnInit() {

    this.clienteService.getAll()
      .subscribe(
        (pontuacoes) => this.pontuacoes = pontuacoes,
        (err) => {
          this.pontuacoes = [];
        }
      );


    this.cols = [
      { field: 'valorMinimo', header: 'Vl. Mínimo' },
      { field: 'valorMaximo', header: 'Vl. Máximo' },
      { field: 'pontos', header: 'Pontos' }
    ];
  }

}
