
import { Endereco } from './endereco';
import { Contato } from './contato';

export class Cliente {

  id: number;
  nome: string;
  rg: string;
  cpf: string;
  dataNascimento: string;
  sexo: string;
  endereco: Endereco = new Endereco();
  pontuacaoTotal: number;
  telefones: Contato[] = [];
  emails: Contato[] = [];

  public getFullAddress() {
    return this.endereco.logradouro &&
      `${this.endereco.logradouro}, ${this.endereco.numeral} - ${this.endereco.cidade}`;
  }

}
