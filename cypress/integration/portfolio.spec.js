/// <reference types="cypress" />
describe('My Portfolio', () => {
  describe('Terminal Home Page', () => {
    describe('On start', () => {
      beforeEach(() => {
        cy.visit('/')
      })
      it('Greets the user with some messages', () => {
        cy.get('.log#welcome').should('be.visible')
      })
      it('Guides the user with inviting him to try the help command', () => {
        cy.get('.log#typeHelp').should('be.visible')
      })
      it('Waits for user input with focus', () => {
        cy.get('input#terminalInput').should('be.visible').and('be.focused')
      })
    })
    describe('Unrecognized command', () => {
      before(() => {
        cy.visit('/')
        cy.get('input#terminalInput').type('blabla').type('{enter}')
      })
      it('Should add a log', () => {
        cy.get('.log').should('have.lengthOf', 3)
      })
    })
    describe('Help command', () => {
      before(() => {
        cy.visit('/')
        cy.get('input#terminalInput').type('aide').type('{enter}')
      })
    })
  })
})