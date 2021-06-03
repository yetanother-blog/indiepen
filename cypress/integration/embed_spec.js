describe('Indiepen Embed', () => {
  it('Opens the embed tool', () => {
    cy.visit('?url=http%3A%2F%2Flocalhost%3A8080%2Fexample')
  })

  it('Shows the example project', () => {
    cy.contains('👋')
  })
})
