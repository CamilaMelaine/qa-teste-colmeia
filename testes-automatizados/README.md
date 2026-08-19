# Testes Automatizados — Cypress

Este diretório contém um teste automatizado simples, desenvolvido com [Cypress](https://www.cypress.io/), cobrindo dois dos bugs identificados no teste exploratório manual:

- **BUG-001**: Login realizado com credenciais inválidas
- **BUG-002**: Funcionalidade "Esqueceu sua senha" não responde

## Como rodar localmente

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Instale as dependências:
   ```bash
   npm install cypress --save-dev
   ```
3. Abra o Cypress em modo interativo:
   ```bash
   npx cypress open
   ```
4. Ou rode em modo headless (linha de comando):
   ```bash
   npx cypress run
   ```

## Observação

Os testes foram escritos com base no comportamento esperado do sistema. Como os bugs BUG-001 e BUG-002 ainda estão presentes na aplicação, espera-se que **esses testes falhem** na versão atual — o que confirma a existência dos bugs de forma automatizada e reprodutível.

Os seletores (`input[name="email"]`, `[data-testid="modal-redefinir-senha"]`, etc.) foram estimados com base na tela observada durante o teste exploratório e podem precisar de ajuste fino após inspeção direta do DOM da aplicação.
