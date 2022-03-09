const credentials = require('../fixtures/credentials.json');

const viewPorts = ['ipad-mini', 'macbook-16'];

describe('Verify screens', () => {
  viewPorts.forEach((size) => {
    it('Login Screen', () => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#login-button', { timeout: 10000 }).should('be.visible');
      cy.compareSnapshot(`${size}/Login Screen`);
    });

    it('Dashboard Screen', () => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type(credentials.standard_user.username);
      cy.get('#password').type(credentials.standard_user.password);
      cy.get('#login-button').click();

      cy.get('[data-test=product_sort_container]', { timeout: 10000 }).should(
        'be.visible',
      );

      cy.compareSnapshot(`${size}/Dashboard Screen`);
    });
  });
});
