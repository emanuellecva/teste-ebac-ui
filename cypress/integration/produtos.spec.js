/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var qtde = 3


        cy.get('[class="product-block grid"]')
           .contains('Abominable Hoodie').click()
           cy.get('.button-variable-item-L').click()
           cy.get('.button-variable-item-Red').click()
           cy.get('.input-text').clear().type(qtde)
           cy.get('.single_add_to_cart_button').click()
           
           
           cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , qtde)
           cy.get('.woocommerce-message').should('contain' , qtde + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')




    });
});