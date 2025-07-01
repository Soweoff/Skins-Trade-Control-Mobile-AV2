describe("Página inicial", () => {
  it("deve mostrar a lista de skins", () => {
    cy.visit("http://localhost:8081/Itens/containers");

    cy.contains("Containers").should("exist");
    cy.get("img").should("have.length.greaterThan", 0);
    cy.get("title").should("have.length.greaterThan", 0);
  });
});
