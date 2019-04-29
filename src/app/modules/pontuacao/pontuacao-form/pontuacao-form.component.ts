import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pontuacao } from './../../../shared/models/pontuacao';
import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/core/services/popup/popup.service';
import { PontuacaoService } from '../pontuacao.service';

@Component({
  selector: 'app-pontuacao-form',
  templateUrl: './pontuacao-form.component.html',
  styleUrls: ['./pontuacao-form.component.css']
})
export class PontuacaoFormComponent implements OnInit {
  title: string = "Gestão de Pontuações";

  pontuacaoForm: FormGroup;

  pontuacao: Pontuacao = new Pontuacao();

  constructor(
    private popupService: PopupService,
    private formBuilder: FormBuilder,
    private pontuacaoService: PontuacaoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.initForm();

    this.initCurrentPontuacao();

  }

  salvar() {

    this.populatePontuacao();

    this.pontuacaoService.salvar(this.pontuacao)
      .subscribe(
        (pontuacao) => {
          this.pontuacao = pontuacao;
          this.popupService.showSuccess("Sucesso", "Registro salvo com sucesso!");

          this.pontuacaoForm.reset();
        },
        (err) => {
          console.log(err);
          this.popupService.showError("Erro", "Erro ao salvar a pontuação");
        }
      );

  }

  private populatePontuacao() {

    this.pontuacao.valorMinimo = this.pontuacaoForm.controls.valorMinimo.value;
    this.pontuacao.valorMaximo = this.pontuacaoForm.controls.valorMaximo.value;
    this.pontuacao.pontos = this.pontuacaoForm.controls.pontos.value;

  }

  private initForm() {
    this.pontuacaoForm = this.formBuilder.group({
      valorMinimo: [this.pontuacao.valorMinimo, Validators.required],
      valorMaximo: [this.pontuacao.valorMaximo, Validators.required],
      pontos: [this.pontuacao.pontos, Validators.required]
    })
  }



  private initCurrentPontuacao() {
    const id = this.activatedRoute.snapshot.params.id;

    id &&
      this.pontuacaoService.getById(id)
        .subscribe(
          (pontuacao) => this.pontuacao = pontuacao
        );
  }

  isValid(key: string) {
    return this.pontuacaoForm.controls[key].touched && !(this.pontuacaoForm.controls[key].valid);
  }

}
