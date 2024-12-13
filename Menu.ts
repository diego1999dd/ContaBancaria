import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { ContaCorrente } from "./src/Model/ContaCorrente";
import { ContaPoupanca } from "./src/Model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tipoContas = ["Conta Corrente", "Conta Poupanca"];

  // Criando um objeto da classe contaController
  const contas = new ContaController();

  //Novas Instâncias da Classe ContaCorrente (Objetos)
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      1234,
      1,
      "Amanda Magro",
      1000000.0,
      100000.0
    )
  );
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      4578,
      1,
      "João da Silva",
      1000.0,
      100.0
    )
  );

  // Novas Instâncias da Classe ContaPoupança (Objetos)
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10)
  );
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15)
  );

  while (true) {
    menu();

    opcao = readlinesync.questionInt("Digite a opcao desejada:");
    if (opcao === 9) {
      about();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar Conta\n\n", colors.reset);

        console.log("Digite o Numero da Agencia: ");
        agencia = readlinesync.questionInt("");

        console.log("Digite o Nome do Titular: ");
        titular = readlinesync.question("");

        console.log("Escolha o Tipo da conta: ");
        tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

        console.log("Digite o Saldo da Conta: ");
        saldo = readlinesync.questionInt("");

        switch (tipo) {
          case 1:
            console.log("Digite o Limite da Conta: ");
            limite = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );
            break;

          case 2:
            console.log("Digite o Dia do Aniversario: ");
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;
        }

        keyPress();
        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");
        contas.listarTodas();
        keyPress();
        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por número\n\n");

        console.log("Digite o numero da Conta:");
        numero = readlinesync.questionInt("");

        contas.procurarPorNumero(numero);
        keyPress();
        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");
        keyPress();
        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");
        keyPress();
        break;
      case 6:
        console.log("\n\nSaque\n\n");
        keyPress();
        break;
      case 7:
        console.log("\n\nDepósito\n\n");
        keyPress();
        break;
      case 8:
        console.log("\n\nDepósito\n\n");
        keyPress();
        break;
      default:
        console.log("\nOpção Inválida!\n");
        keyPress();
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

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}
main();
