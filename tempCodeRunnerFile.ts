import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { ContaCorrente } from "./src/Model/ContaCorrente";
import { ContaPoupanca } from "./src/Model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
  let opcao,
    numero,
    agencia,
    tipo,
    saldo,
    limite,
    aniversario,
    numeroDestino,
    valor: number;
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

    opcao = readlinesync.questionInt(colors.fg.whitestrong + "Digite a opcao desejada:" + colors.reset);
    if (opcao === 0) {
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
        console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n");
        contas.listarTodas();
        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n"
        );

        console.log("Digite o numero da Conta:");
        numero = readlinesync.questionInt("");

        contas.procurarPorNumero(numero);
        keyPress();
        break;
      case 4:
        console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n");

        console.log("Digite o numero da Conta:");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta !== null) {
          console.log("Digite o novo Numero da Agencia: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o novo Nome do Titular: ");
          titular = readlinesync.question("");

          console.log("Digite o novo Saldo da Conta: ");
          saldo = readlinesync.questionInt("");

          tipo = conta.tipo;

          switch (tipo) {
            case 1:
              console.log("Digite o novo Limite da Conta: ");
              limite = readlinesync.questionInt("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;
            case 2:
              console.log("Digite o novo Dia do Aniversario da poupanca: ");
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log("Conta nao encontrada!");
        }
        keyPress();
        break;
      case 5:
        console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n");

        console.log("Digite o numero da Conta:");
        numero = readlinesync.questionInt("");

        contas.deletar(numero);

        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n");

        console.log("Digite o numero da Conta:");
        numero = readlinesync.questionInt("");

        console.log("Digite o valor do Saque:");
        valor = readlinesync.questionFloat("");

        contas.sacar(numero, valor);

        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n");

        console.log("Digite o numero da Conta:");
        numero = readlinesync.questionInt("");

        console.log("Digite o valor do Deposito:");
        valor = readlinesync.questionFloat("");

        contas.depositar(numero, valor);
        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferencia entre Contas\n\n"
        );

        console.log("Digite o numero da Conta de origem:");
        numero = readlinesync.questionInt("");

        console.log("Digite o numero da conta de destino:");
        numeroDestino = readlinesync.questionFloat("");

        console.log("Digite o valor de Transferencia:");
        valor = readlinesync.questionFloat("");

        contas.transferir(numero, numeroDestino, valor);
        keyPress();
        break;
      case 9:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsulta Titular\n\n",
          colors.reset
        );
        console.log("\nDigite o nome do titular: ");
        titular = readlinesync.question("");
        contas.procurarPorTitular(titular);
        keyPress();
        break;
      default:
        console.log(colors.fg.whitestrong, "\nOpção Inválida!\n");
        keyPress();
        break;
    }
  }
}

function menu(): void {
  // prettier-ignore-start
  console.log(colors.fg.whitestrong);
  console.log("##########################################################");
  console.log(
    colors.fg.bluestrong +
      "               BANCO DOS GAMERS - THE PLAY BANK           " +
      colors.reset
  );
  console.log(
    colors.fg.whitestrong +
      "##########################################################" +
      colors.reset
  );
  console.log("                                                          ");
  console.log(colors.fg.yellow + "                1" + colors.fg.white + " - Criar conta                           " + colors.reset);
  console.log(colors.fg.red + "                2" + colors.fg.white + " - Listar todas as Contas                " + colors.reset);
  console.log(colors.fg.green + "                3" + colors.fg.white + " - Buscar Conta por numero               " + colors.reset);
  console.log(colors.fg.crimson + "                4" + colors.fg.white + " - Atualizar Dados da Conta              " + colors.reset);
  console.log(colors.fg.bluestrong + "                5" + colors.fg.white + " - Apagar a Conta                        " + colors.reset);
  console.log(colors.fg.redstrong + "                6" + colors.fg.white + " - Sacar                                 " + colors.reset);
  console.log(colors.fg.yellow + "                7" + colors.fg.white + " - Depositar                             " + colors.reset);
  console.log(colors.fg.green + "                8" + colors.fg.white + " - Transferir valores entre Contas       " + colors.reset);
  console.log(colors.fg.red + "                9" + colors.fg.white + " - Buscar Conta por titular              " + colors.reset);
  console.log(colors.fg.crimson + "                0" + colors.fg.white + " - Sair                                  " + colors.reset);

  console.log("                                                          ");
  console.log(
    colors.fg.whitestrong +
      "##########################################################" +
      colors.reset
  );
  console.log(colors.reset);
}
// prettier-ignore-end
function about() {
  console.log(
    colors.fg.green +
      "\n*****************************************************" +
      colors.reset
  );
  console.log(
    colors.fg.whitestrong + "Projeto Desenvolvido por: Diego." + colors.reset
  );
  console.log(
    colors.fg.whitestrong +
      "Generation Brasil - diegon@genstudents.org" +
      colors.reset
  );
  console.log(colors.fg.whitestrong + "github.com/diego1999dd" + colors.reset);

  console.log(
    colors.fg.green +
      "\n*****************************************************" +
      colors.reset
  );
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}
main();
