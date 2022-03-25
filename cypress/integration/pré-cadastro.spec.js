/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');


describe('Funcionalidade pré-cadastro', () =>{
    let nomeFaker= faker.name.firstName()
    let sobrenomeFaker= faker.name.lastName()
    let emailfaker = faker.internet.email()

    beforeEach(() => {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso' , () => {
        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type(sobrenomeFaker)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type (faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName ())
        cy.get('.woocommerce-Button').click()
        
    } )
})