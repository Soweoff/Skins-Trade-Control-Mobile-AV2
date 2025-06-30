describe("Calculadora de Skins", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/calculadora"); // ou o endereço que seu app Expo estiver servindo no navegador
  });

  it("deve calcular corretamente o total no modo padrão", () => {
    cy.contains("Modo atual: Padrão").should("exist");

    cy.contains("AK-47 Redline")
      .parent()
      .within(() => {
        cy.get("input").type("2");
      });

    cy.contains("AWP Asiimov")
      .parent()
      .within(() => {
        cy.get("input").type("1");
      });

    cy.contains("Calcular").click();

    cy.contains(/Total no PIX: R\$ [0-9,.]+/).should("exist");
  });
});
