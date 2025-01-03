import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";

let opcao: number;

export function main() {
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
