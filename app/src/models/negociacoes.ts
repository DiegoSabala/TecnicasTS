import { Modelo } from "../intefaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public isEqual(negociacoes: Negociacoes): boolean {
    return (
      JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    );
  }
}
