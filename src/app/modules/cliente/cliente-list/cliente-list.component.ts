import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../../shared/models/cliente';
import { ClienteService } from './../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']

})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[];

  cols: any[];

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {

    this.clienteService.getAll()
      .subscribe(
        (clientes) => this.clientes = clientes,
        (err) => {
          this.clientes = [];
        }
      );


    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'rg', header: 'RG' },
      { field: 'cpf', header: 'CPF' },
      { field: 'dataNascimento', header: 'DT. Nascimento' },
      { field: 'sexo', header: 'Sexo' },
      { field: 'pontuacaoTotal', header: 'Pontuação' }
    ];
  }


  goToShow(id: number) {
    this.router.navigate(['/clientes', id]);
  }
}
