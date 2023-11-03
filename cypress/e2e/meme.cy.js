describe('Button', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('button').should('be.visible')
    cy.get('main > div > img').should('be.visible')
  })
})
