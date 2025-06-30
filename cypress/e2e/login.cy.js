describe("Tela de login", () => {
  it("deve permitir digitar email e senha", () => {
    cy.visit("http://localhost:8081/login");

    cy.get('input[placeholder="Email"]').type("teste@exemplo.com");
    cy.get('input[placeholder="Senha"]').type("123456");

    cy.get("button").contains("Entrar").should("be.visible");
  });
});
