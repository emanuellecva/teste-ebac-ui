
/// <reference types ="cypress"/>

const perfil = require('../fixtures/perfil.json')
//ele reconhece esse caminho, o Path, mas não reconhece lá embaixo)

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit ('minha-conta')
    });
    
    afterEach(() => {
        cy.screenshot()
    });
    
    it ('Deve fazer login com sucesso', () =>{
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno')

    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta') 

        
    });

    it ('Deve fazer login com sucesso - Usando fixtures ', () => {
        
        cy.fixture('perfil').then(dados => {

            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.page-title').should('contain' , 'Minha conta')  
        })
    });


    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')


        
    });



    it ('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{
        
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')


    })

    it ('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('ebac@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. ')


    })

})