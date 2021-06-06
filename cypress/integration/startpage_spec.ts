describe('Indiepen Startpage', () => {
  it('Opens the startpage', () => {
    cy.visit('/');
  });

  it('Shows a title', () => {
    cy.get('h1').contains('Embed your HTML, CSS and JS example with Indiepen');
  });

  it('Generates, copies and resets code snippet', () => {
    cy.contains('Your code example URL (required)')
      .click()
      .type('https://example.com');
    cy.contains('Generate').click();
    cy.contains('Copy code').click();
    cy.waitUntil(() =>
      cy
        .task('getClipboard')
        .should(
          'contain',
          '<iframe class="indiepen" src="https://indiepen.tech/?url=https%3A%2F%2Fexample.com" style="width: 100%; overflow: hidden; display: block" title="Indiepen Embed" loading="lazy" width="100%" height="450" frameborder="0"></iframe>'
        )
    );
    cy.contains('Reset').click();
    cy.get('#generated-result').should('be.disabled', true);
    cy.contains('Reset').should('be.disabled', true);
  });
});
