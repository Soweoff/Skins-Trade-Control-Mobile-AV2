describe("Tela de login", () => {
  it("deve permitir digitar email e senha", () => {
    cy.visit("http://localhost:8081/login");

    cy.get('input[placeholder="Email"]').type("testeAV@gmail.com");
    cy.get('input[placeholder="Senha"]').type("wjixsv80");

    cy.get("button").contains("Entrar").should("be.visible");
  });
});
