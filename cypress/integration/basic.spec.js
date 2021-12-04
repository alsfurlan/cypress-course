/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.title()
            .should('be.eq', 'Campo de treinamento')
            .and('contain', 'Campo')
    });
});  