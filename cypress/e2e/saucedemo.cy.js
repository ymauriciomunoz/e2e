const constante= require("../utils/constantes")
const selectoresCompra= require("../utils/selectoresCompra")
const selectorLogin = require("../utils/selectoresLogin");

describe('Casos saucedemo', () => {

    beforeEach(() => {
      cy.visit('')
      cy.fixture("user.json").as("users")  
      cy.get("@users").then((user)=>{
        cy.login(user.usuario,user.password)
      })
    })
    afterEach(function(){
      cy.get('.bm-burger-button').click()
      cy.get(selectorLogin.element5.botonCerrarSesion).should("be.visible").click()
    })
    it('Verificar que el usuario pueda iniciar sesión correctamente y que la identidad del usuario sea verificada después del inicio de sesión.', () => {
      cy.get(selectorLogin.element5.botonCerrarSesion).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.usuario);
      })
    })
    it('verificar 2 elementos agregados al carrito', () => {
      cy.get(selectoresCompra.element1.botonSauceBackpack).click()
      cy.get(selectoresCompra.element2.botonBikeLight).click()
      cy.get(selectoresCompra.element3.cart).click()
      cy.get(selectoresCompra.element4.labelSauceLabsBackpack).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(selectoresCompra.element1.description);
      })
      cy.get(selectoresCompra.element5.labelSauceLabsBikeLight).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(selectoresCompra.element2.description);
      })

    })

    it('completar el formulario de compra', () => {
      cy.get(selectoresCompra.element1.botonSauceBackpack).should("be.visible").click()
      cy.get(selectoresCompra.element2.botonBikeLight).should("be.visible").click()
      cy.get(selectoresCompra.element3.cart).should("be.visible").click()
      cy.get(selectoresCompra.element4.labelSauceLabsBackpack).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(selectoresCompra.element1.description);
      })
      cy.get(selectoresCompra.element5.labelSauceLabsBikeLight).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(selectoresCompra.element2.description);
      })
      cy.get(selectoresCompra.element6.botonCheckout).should("be.visible").click()
      cy.get(selectoresCompra.element7.inputFirsName).should("be.visible").type(constante.firsName)
      cy.get(selectoresCompra.element8.inputLastName).should("be.visible").type(constante.lastName)
      cy.get(selectoresCompra.element9.inputPostalCode).should("be.visible").type(constante.postalCode)
      cy.get(selectoresCompra.element10.botonContinue).should("be.visible").click()
      cy.get(selectoresCompra.element11.botonFinish).should("be.visible").click()
      cy.get('[data-test="complete-header"]').invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.orderComplet);
      })
    })
  })
