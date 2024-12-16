import { Conta } from "../Model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  // Coleçao Array que vai armazenar os Objetos Conta
  private listaContas = new Array<Conta>();

  // Controlar automaticamente os Numeros das Contas
  public numero: number = 0;

  procurarPorTitular(titular: string): void {
    // Filtragem dos dados
    let buscaPorTitular = this.listaContas.filter((conta) =>
      conta.titular.toUpperCase().includes(titular.toUpperCase())
    );

    // Listagem dos Dados
    buscaPorTitular.forEach((conta) => conta.visualizar());
  }

  procurarPorNumero(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) buscaConta.visualizar();
    else console.log("\nConta não Encontrada!");
  }
  listarTodas(): void {
    for (let conta of this.listaContas) conta.visualizar();
  }
  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("A Conta foi cadastrada com sucesso!");
  }
  atualizar(conta: Conta): void {
    const buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta !== null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
    } else {
      console.log("\nA Conta foi atualizada com sucesso!");
    }
  }
  deletar(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log("A Conta foi deletada com sucesso!");
    } else {
      console.log("\nConta nao Encontrada!");
    }
  }
  sacar(numero: number, valor: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      if (buscaConta.sacar(valor) === true)
        console.log("O Saque foi efetuado com sucesso!");
    } else {
      console.log("\nConta nao Encontrada!");
    }
  }
  depositar(numero: number, valor: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      buscaConta.depositar(valor);
      console.log("O Deposito foi efetuado com sucesso!");
    } else {
      console.log("\nConta nao Encontrada!");
    }
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    const contaOrigem = this.buscarNoArray(numeroOrigem);
    const contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem !== null && contaDestino !== null) {
      if (contaOrigem.sacar(valor) === true) {
        contaDestino.depositar(valor);
        console.log("A Transferencia foi efetuado com sucesso!");
      }
    } else
      console.log(
        "\nConta de origem e /ou Conta de Destino nao foi Encontrada!"
      );
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
