describe("sample test", () => {
  it("do nothing", () => {
    expect(true).to.equal(true);
  });

  it("visit example website", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
      
    cy.get(".action-form")
      .submit()
      .next()
      .should("contain", "Your form has been submitted!");
  });
});
