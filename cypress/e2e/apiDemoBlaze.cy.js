const constante= require("../utils/constantes")
const selectoresCompra= require("../utils/selectoresCompra")
const selectorLogin = require("../utils/selectoresLogin");

describe('Casos demoblaze', () => {
    let randomNum;
    let username
  beforeEach(() => {
    randomNum = Math.floor(Math.random() * 10000) + 1;
    username = `yeison${randomNum}`;
  })

    it('intentar crear usuario existente', () => {
      cy.demoBlaze('yeis','MTIzNDU=','signup').then(response=>{
        expect(response.status).to.equal(200);
        expect(response.body.errorMessage).to.deep.equal('This user already exist.');
      })
    })
    it('crear usuario', () => {
      cy.demoBlaze(username,'MTIzNDU=','signup').then(response=>{
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal('');
      })
    })
    it('login exitoso', () => {
      cy.demoBlaze(username,'MTIzNDU=','signup').then(response=>{
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal('');})
      cy.demoBlaze(username,'MTIzNDU=','login').then(response=>{
        expect(response.status).to.equal(200);
        cy.log(response.body)
        expect(response.body).to.include('Auth_token:');
      })
    })
    it('login incorrecto con password errado', () => {
      cy.demoBlaze(username,'MTIzNDU=','signup').then(response=>{
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal('');})
      cy.demoBlaze(username,'MTIzNDU='+'1','login').then(response=>{
        expect(response.status).to.equal(200);
        expect(response.body.errorMessage).to.deep.equal('Wrong password.');
      })
    })
    it('login incorrecto con username errado', () => {
      cy.demoBlaze(username,'MTIzNDU=','signup').then(response=>{
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal('');})
      cy.demoBlaze(username+'1','MTIzNDU=','login').then(response=>{
        expect(response.status).to.equal(200);
        expect(response.body.errorMessage).to.deep.equal('User does not exist.');
      })
      cy.wait(3000)
    })
  })
