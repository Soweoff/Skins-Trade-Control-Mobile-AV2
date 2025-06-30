describe("Página inicial", () => {
  it("deve mostrar a lista de skins", () => {
    cy.visit("http://localhost:8081/");

    cy.contains("Skins").should("exist");
    cy.get("img").should("have.length.greaterThan", 0); // se há imagens de skins
  });
});
