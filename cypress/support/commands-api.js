const selector = require("../utils/selectoresLogin");

Cypress.Commands.add('demoBlaze', (user,pass,endpoint) => { 
  const requestBody = {};
  if (user !== null) {
    requestBody.username = user;
  }
  if (pass !== null) {
    requestBody.password = pass;
  }
  return cy.request({
    method:"POST",
    url: Cypress.env("apiUrl")+endpoint,
    headers:{
      "Content-Type": "application/json " 
    },
    body:requestBody,
    failOnStatusCode: false,
  })
    
})