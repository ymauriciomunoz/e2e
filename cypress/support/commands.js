const selector = require("../../cypress/utils/selectoresLogin");

Cypress.Commands.add('login', (email, password) => { 
    cy.get(selector.element2.inputEmail).should("be.visible").type(email)
    cy.get(selector.element3.inputPassword).should("be.visible").type(password)
    cy.get(selector.element4.botonCompletarLogin).should("be.visible").click()
  })