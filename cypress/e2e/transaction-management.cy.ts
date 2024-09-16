describe('Transaction management', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clerkSignIn({
      strategy: 'password',
      identifier: 'testuser@gmail.com',
      password: '123456',
    });
    cy.visit('/transactions');
  });

  // New account creation
  it('should create an account named new account', () => {
    cy.visit('/accounts');
    cy.get('[data-cy="add-new-account-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'New Account');
    cy.get('[data-cy="account-name-input"]').type('new account');

    cy.get('[data-cy="submit-account-button"]').should('not.be.disabled');
    cy.get('[data-cy="submit-account-button"]').click();
  });

  // New category creation
  it('should create a new category named new category', () => {
    cy.visit('/categories');
    cy.get('[data-cy="add-new-category-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'New Category');
    cy.get('[data-cy="category-name-input"]').type('new category');
    cy.get('[data-cy="submit-category-button"]').click();
  });

  // try submitting an empty transaction form
  it('should fail to submit an empty transaction form', () => {
    cy.get('[data-cy="add-new-transaction-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'New Transaction');
    cy.get('[data-cy="submit-transaction-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'New Transaction');
  });

  // New transaction creation
  it('should create a new transaction', () => {
    const currentDate = new Date().getDate();

    cy.get('[data-cy="add-new-transaction-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'New Transaction');
    // Set today's date
    cy.get('[data-cy="date-input-button"]').click();
    cy.get('[aria-labelledby="react-day-picker-2"]').should('be.visible');
    cy.get('.bg-accent').click();

    // Select the new account
    cy.get('#react-select-3-input').click();
    cy.get('#react-select-3-option-0').click();

    // Select the new category
    cy.get('#react-select-5-input').click();
    cy.get('#react-select-5-option-0').click();

    // Type payee in payee input field
    cy.get('[data-cy="payee-input"]').type('payee');

    // Set amount to 100$
    cy.get('[data-cy="amount-input"]').type('100');

    // Submit transaction form
    cy.get('[data-cy="submit-transaction-button"]').click();
  });
});
