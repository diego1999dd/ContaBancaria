# Banco dos Gamers - The Play Bank 🏦🎮

Este projeto simula um banco com funcionalidades de contas correntes e poupanças, permitindo criar, listar, consultar, atualizar e excluir contas, além de realizar operações bancárias como saque, depósito e transferências.

## Funcionalidades 🚀

### 1. **Criar Conta** 💳
Permite criar uma nova conta, seja **Conta Corrente** ou **Conta Poupança**, informando o número da agência, nome do titular, saldo inicial e, dependendo do tipo de conta, o limite ou o aniversário da conta.

### 2. **Listar todas as Contas** 📜
Exibe todas as contas cadastradas no sistema, mostrando os detalhes de cada uma delas.

### 3. **Consultar dados da Conta** 🔍
Busca e exibe os dados de uma conta bancária pelo número da conta.

### 4. **Atualizar dados da Conta** ✏️
Permite alterar informações de uma conta existente, como número da agência, nome do titular, saldo e, para conta corrente, o limite, ou, para conta poupança, o aniversário.

### 5. **Apagar uma Conta** 🗑️
Deleta uma conta bancária do sistema, dado o número da conta.

### 6. **Saque** 💵
Realiza o saque de um valor em uma conta existente, debitando o saldo correspondente.

### 7. **Depósito** 💰
Permite o depósito de um valor em uma conta existente, creditando o saldo correspondente.

### 8. **Transferência entre Contas** 🔄
Permite a transferência de um valor de uma conta para outra, desde que as contas existam e o saldo seja suficiente para a transação.

### 9. **Consultar Conta pelo Titular** 🧑‍💼
Busca todas as contas associadas a um titular específico, mostrando as informações das contas desse titular.

### 10. **Sair** 🚪
Finaliza o programa e sai do sistema.

## Estrutura do Código 🧑‍💻

- **ContaCorrente**: Representa a conta corrente com funcionalidades adicionais, como limite de crédito.
- **ContaPoupanca**: Representa a conta poupança com funcionalidades relacionadas ao aniversário da conta.
- **ContaController**: Controla a criação, atualização, listagem, e remoção das contas. Também gerencia as operações bancárias como saque, depósito e transferências.

## Como Usar ⚙️

1. **Instalação**:
   - Clone o repositório:
     ```bash
     git clone https://github.com/diego1999dd/banco-dos-gamers.git
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```

2. **Execução**:
   - Para rodar o programa, use o comando:
     ```bash
     npm start
     ```

3. **Operações**:
   - Siga as opções apresentadas no menu para realizar as operações desejadas.

## Sobre o Projeto 📚

Desenvolvido por **Diego Rodrigues do Nascimento** 👨‍💻, o projeto simula um sistema bancário simples, com o foco em aprendizado e desenvolvimento de habilidades de programação.

- **GitHub**: [github.com/diego1999dd](https://github.com/diego1999dd)
- **Email**: diegon@genstudents.org

## Licença 📄

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

