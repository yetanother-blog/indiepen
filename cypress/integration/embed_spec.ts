describe('Indiepen Embed', () => {
  describe('desktop', () => {
    it('Opens the embed tool', () => {
      cy.visit('embed?url=/example');
    });

    it('Shows the example project', () => {
      cy.get('.preview.result').its('0.contentDocument').contains('👋');
    });

    it('Previews html by default', () => {
      cy.contains('<h1>👋</h1>');
    });

    it('Previews css after clicking', () => {
      cy.contains('CSS').click();
      cy.contains('body {');
    });

    it('Previews html after clicking', () => {
      cy.contains('HTML').click();
      cy.contains('<h1>👋</h1>');
    });

    it('Previews js after clicking', () => {
      cy.contains('JS').click();
      cy.contains(`console.log('Hey 👋');`);
    });
  });

  describe('mobile', () => {
    beforeEach(() => {
      cy.viewport(375, 812);
    });

    it('Opens the embed tool', () => {
      cy.visit('embed?url=/example');
    });

    it('Shows html by default', () => {
      cy.contains('<h1>👋</h1>');
    });

    it('Shows the example project after clicking', () => {
      cy.contains('Result').click();
      cy.get('.preview.result').its('0.contentDocument').contains('👋');
    });

    it('Previews html after clicking', () => {
      cy.contains('HTML').click();
      cy.contains('<h1>👋</h1>');
    });

    it('Previews css after clicking', () => {
      cy.contains('CSS').click();
      cy.contains('body {');
    });

    it('Previews js after clicking', () => {
      cy.contains('JS').click();
      cy.contains(`console.log('Hey 👋');`);
    });
  });
});
