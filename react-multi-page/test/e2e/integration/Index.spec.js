describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/')
    cy.contains('Index')
    cy.contains('Link To Home').click()
    cy.url().should('include', 'home')
  })
})
