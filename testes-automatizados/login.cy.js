describe('Login - ColmeIA Forms', () => {
  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com');
  });

  it('não deve permitir login com credenciais inválidas (BUG-001)', () => {
    // Os campos são renderizados dentro de um componente customizado <field>,
    // identificado pelo atributo formcontrolname.
    cy.get('field[formcontrolname="email"] input').type('email-invalido@teste.com');
    cy.get('field[formcontrolname="password"] input').type('senhaerrada123');
    cy.contains('button', 'Entrar').click();

    // Resultado esperado: sistema deve bloquear o acesso e mostrar mensagem de erro.
    // Resultado observado (BUG-001): o sistema permite continuar mesmo com credenciais inválidas,
    // exibindo apenas um popup de confirmação em vez de bloquear o acesso.
    cy.contains('Seu login está incorreto').should('be.visible');
  });

  it('BUG-002: "Esqueceu sua senha" não responde ao clique', () => {
    cy.url().then((urlAntes) => {
      cy.contains('a', 'Esqueceu sua senha').click();

      // Resultado esperado: deve abrir uma nova janela/modal de redefinição de senha
      // (a URL ou a tela deveriam mudar de alguma forma).
      // Resultado observado (BUG-002): nenhuma ação ocorre ao clicar — a URL permanece
      // exatamente a mesma, confirmando que o link não tem funcionalidade implementada.
      cy.url().should('eq', urlAntes);
    });
  });
});
