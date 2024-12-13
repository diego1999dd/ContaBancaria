import { Conta } from "../Model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  // Coleçao Array que vai armazenar os Objetos Conta
  private listaContas = new Array<Conta>();

  // Controlar automaticamente os Numeros das Contas
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      console.log("\n Conta não Encontrada!");
      buscaConta.visualizar();
    } else {
      console.log("\nConta não encontrada!");
    }
  }
  listarTodas(): void {
    for (let conta of this.listaContas) conta.visualizar();
  }
  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("A Conta foi cadastrada com sucesso!");
  }
  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  deletar(numero: number): void {
    throw new Error("Method not implemented.");
  }
  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  // Metodos auxiliares

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }

    return null;
  }
}
