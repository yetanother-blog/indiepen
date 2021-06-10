const expectedSnippetCode =
  '<iframe class="indiepen" src="https://indiepen.tech/embed/?url=https%3A%2F%2Fexample.com" style="width: 100%; overflow: hidden; display: block" title="Indiepen Embed" loading="lazy" width="100%" height="450"></iframe>';

describe('Indiepen Startpage', () => {
  it('Opens the startpage', () => {
    cy.visit('/');
  });

  it('Shows a title', () => {
    cy.get('h1').contains('Embed your HTML, CSS and JS example with Indiepen');
  });

  it('Generates and resets the code snippet', () => {
    cy.contains('Your code example URL (required)')
      .click()
      .type('https://example.com');
    cy.contains('Generate').click();
    cy.get('#generated-result').should('have.value', expectedSnippetCode);

    cy.contains('Reset').click();
    cy.get('#generated-result').should('not.have.value', expectedSnippetCode);
    cy.contains('Reset').should('be.disabled', true);
  });
});
