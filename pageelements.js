/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://liberty-portal.netlify.app/9-easy-steps-in-creating-a-half-ponytail-at-home')
  //  cy.get('h2').should('exist')
    cy.get('h2').contains('Products')
    .and cy.get('h2').contains('Tools')
    cy.get('h3').contains('Related Topics')
    cy.get('h4').contains('Related Articles')

cy.get('.jss87').contains('Time')
.and cy.get('.jss87').contains('Skill')

cy.get('.jss87').should('not.be.empty')

  })

    it('cy.reload() - reload the page', () => {
      // https://on.cypress.io/reload
      cy.reload()

      // reload the page without using the cache
      cy.reload(true)

    })


      })


  })
