import { Cidade } from './../models/cidade';

export class Endereco {
  logradouro: string;
  numeral: string;
  cep: string;
  cidade: Cidade = new Cidade();
}
