import { ActivatedRoute } from '@angular/router';
import { Cliente } from './../../../shared/models/cliente';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.css']
})
export class ClienteInfoComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {

    this.initCliente();

  }

  private initCliente() {
    const id = this.activatedRoute.snapshot.params.id;

    id && this.getCliente(id);
  }

  private getCliente(id: number) {
    this.clienteService.getById(id)
      .subscribe(cliente => this.cliente = cliente);
  }

}
