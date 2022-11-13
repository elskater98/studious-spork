describe('Visit a page', () => {
  it('User with authentication', () => {
    cy.visit('http://localhost:3000/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .control > .input').clear('8u');
    cy.get(':nth-child(1) > .control > .input').type('username@gmail.com');
    cy.get(':nth-child(2) > .control > .input').clear('5P#sJK#4&9v4');
    cy.get(':nth-child(2) > .control > .input').type('5P#sJK#4&9v4');
    cy.get('form > :nth-child(1) > .button').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('User without authentication', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/login');
    cy.get(':nth-child(1) > .control > .input').clear('us');
    cy.get(':nth-child(1) > .control > .input').type('username@gmail.com');
    cy.get(':nth-child(2) > .control > .input').clear('bfa');
    cy.get(':nth-child(2) > .control > .input').type('bfajhfahofiha');
    cy.get('form > :nth-child(1) > .button > span').click();
    cy.visit('http://localhost:3000');
    cy.visit('http://localhost:3000');
    cy.visit('http://localhost:3000');
    cy.visit('http://localhost:3000');
    /* ==== End Cypress Studio ==== */
  });

    it('User search by postal code', () => {
      cy.visit('http://localhost:3000/')
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > .control > .input').clear('8u');
      cy.get(':nth-child(1) > .control > .input').type('username@gmail.com');
      cy.get(':nth-child(2) > .control > .input').clear('5P#sJK#4&9v4');
      cy.get(':nth-child(2) > .control > .input').type('5P#sJK#4&9v4');
      cy.get('form > :nth-child(1) > .button').click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.input').clear('2');
      cy.get('.input').type('25001');
      cy.get(':nth-child(2) > .button > span').click();
      cy.get('.input').clear('2500');
      cy.get('.input').type('25125');
      cy.get(':nth-child(2) > .button > span').click();
      cy.get('.input').clear('2512');
      cy.get(':nth-child(2) > .button > span').click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.input').type('25001');
      /* ==== End Cypress Studio ==== */
    })
})