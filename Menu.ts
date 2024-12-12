import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { Conta } from "./src/Model/Conta";
import { ContaCorrente } from "./src/Model/ContaCorrente";
import { ContaPoupanca } from "./src/Model/ContaPoupanca";

let opcao: number;

export function main() {
  /* Cria novas instancias (Objetos) da Classe conta
  const conta1 = new Conta(1, 123, 1, "Jonas", 100000);
  conta1.visualizar();
  / Saque
  console.log(conta1.sacar(200000.0));
  conta1.visualizar();

  const conta2 = new Conta(2, 123, 1, "Aline", 200000);
  conta2.visualizar();

  / Depósito
  conta1.depositar(500.0);
  conta1.visualizar();

   Contas Correntes*/

  /*const cc1 = new ContaCorrente(3, 789, 1, "Andressa", 100000, 1000);
  cc1.visualizar();

  // Saque na Conta Corrente
  cc1.sacar(100500);
  cc1.visualizar();

  // Deposito na Conta Corrente
  cc1.depositar(2000);
  cc1.visualizar();

  console.log("");*/

  // Conta poupanca
  const cp1 = new ContaPoupanca(4, 800, 2, "Victor", 500000, 5);
  cp1.visualizar();

  cp1.sacar(200000);
  cp1.visualizar();

  cp1.depositar(50000);
  cp1.visualizar();

  console.log("");

  while (true) {
    menu();

    opcao = readlinesync.questionInt("Digite a opcao desejada:");
    if (opcao === 9) {
      about();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar Conta\n\n");
        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");
        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por número\n\n");
        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");
        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");
        break;
      case 6:
        console.log("\n\nSaque\n\n");
        break;
      case 7:
        console.log("\n\nDepósito\n\n");
        break;
      case 8:
        console.log("\n\nDepósito\n\n");
        break;
      default:
        console.log("\nOpção Inválida!\n");
        break;
    }
  }
}

function menu(): void {
  console.log(colors.fg.white);
  console.log("##########################################################");
  console.log("                     BANCO DOS GAMERS                     ");
  console.log("##########################################################");
  console.log("                 1 - Criar conta                          ");
  console.log("                 2 - Listar todas as Contas               ");
  console.log("                 3 - Buscar Conta por numero              ");
  console.log("                 4 - Atualizar Dados da Conta             ");
  console.log("                 5 - Apagar a Conta                       ");
  console.log("                 6 - Sacar                                ");
  console.log("                 7 - Depositar                            ");
  console.log("                 8 - Transferir valores entre Contas      ");
  console.log("                 9 - Sair                                 ");
  console.log("##########################################################");
  console.log(colors.reset);
}

function about() {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Diego.");
  console.log("Generation Brasil - diegon@genstudents.org");
  console.log("github.com/diego1999dd");
  console.log("\n*****************************************************");
}

main();
