/// <reference types="cypress" />

context('Funcionalidade Login' , () =>{

    beforeEach( () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve fazer login com sucesso' , () => {
       
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-form > .button').click()
    })
    it('Deve exibir uma mensagem de erro ao inserir usuario  invalido') , () => {
        
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
     
        cy.get('.woocommerce-error > li').should('Endereço de email desconhecido')
    }
    
    })

    it('Deve exibir uma mensagem de erro ao inserir na conta/') , () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@testando')
        cy.get('.woocommerce-form > .button').click()
    
        cy.get('.woocommerce-error > li').should('contain',  'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?') 
    }
       



