import { PopupService } from './../../../core/services/popup/popup.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from './../cliente.service';
import { Cliente } from '../../../shared/models/cliente';
import { Cidade } from '../../../shared/models/cidade';
import { CidadeService } from './../../../shared/services/cidade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  title: string = "Gestão de Cliente";

  clienteForm: FormGroup;

  sexos: any[];
  cidades: Cidade[];

  cliente: Cliente = new Cliente();

  constructor(
    private popupService: PopupService,
    private formBuilder: FormBuilder,
    private cidadeService: CidadeService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.initForm();

    this.initCurrentUser();

    this.initSexos();

    this.initCidades();

  }

  salvar() {

    this.populateCliente();



    this.clienteService.salvar(this.cliente)
      .subscribe(
        (cliente) => {
          this.cliente = cliente;
          this.popupService.showSuccess("Sucesso", "Registro salvo com sucesso!");

          this.clienteForm.reset();
        },
        (err) => {
          console.log(err);
          this.popupService.showError("Erro", "Erro ao salvar o cliente");
        }
      );

  }

  private populateCliente() {

    const fieldData = this.clienteForm.controls.dataNascimento.value;
    const dataNascimento = fieldData.toISOString().slice(0, 10);


    this.cliente.nome = this.clienteForm.controls.nome.value;
    this.cliente.sexo = this.clienteForm.controls.sexo.value;
    this.cliente.dataNascimento = dataNascimento;
    this.cliente.rg = this.clienteForm.controls.rg.value;
    this.cliente.cpf = this.clienteForm.controls.cpf.value;
    this.cliente.endereco.logradouro = this.clienteForm.controls.logradouro.value;
    this.cliente.endereco.numeral = this.clienteForm.controls.numeral.value;
    this.cliente.endereco.cep = this.clienteForm.controls.cep.value;
    this.cliente.endereco.cidade.id = this.clienteForm.controls.cidade.value;
  }

  private initForm() {
    this.clienteForm = this.formBuilder.group({
      nome: [this.cliente.nome, Validators.required],
      sexo: [this.cliente.sexo, Validators.required],
      dataNascimento: [this.cliente.dataNascimento, Validators.required],
      rg: [this.cliente.rg, Validators.required],
      cpf: [this.cliente.cpf, Validators.required],
      logradouro: [this.cliente.endereco.logradouro, Validators.required],
      numeral: [this.cliente.endereco.numeral, Validators.required],
      cep: [this.cliente.endereco.cep, Validators.required],
      cidade: [this.cliente.endereco.cidade.id, Validators.required]

    })
  }

  private initCidades() {
    this.cidadeService.getAll()
      .subscribe(
        (cidades) => this.cidades = cidades,
        (err) => this.cidades = []
      );
  }

  private initSexos() {
    this.sexos = [
      { label: "Feminino", value: "FEMININO" },
      { label: "Masculino", value: "MASCULINO" },
    ];
  }

  private initCurrentUser() {
    const id = this.activatedRoute.snapshot.params.id;

    id &&
      this.clienteService.getById(id)
        .subscribe(
          (cliente) => this.cliente = cliente
        );
  }

  isValid(key: string) {
    return this.clienteForm.controls[key].touched && !(this.clienteForm.controls[key].valid);
  }

}
