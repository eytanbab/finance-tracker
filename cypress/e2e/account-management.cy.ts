describe('Account management', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clerkSignIn({
      strategy: 'password',
      identifier: 'testuser@gmail.com',
      password: '123456',
    });
    cy.visit('/accounts');
  });
  // New account creation
  it('should have the create account button disabled initially', () => {
    cy.get('[data-cy="add-new-account-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'New Account');
    cy.get('[data-cy="account-name-input"]').should('have.value', '');
    cy.get('[data-cy="submit-account-button"]').should('be.disabled');
  });

  it('should create an account named new account', () => {
    cy.get('[data-cy="add-new-account-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'New Account');
    cy.get('[data-cy="account-name-input"]').type('new account');

    cy.get('[data-cy="submit-account-button"]').should('not.be.disabled');
    cy.get('[data-cy="submit-account-button"]').click();
  });

  it('should display the new account in accounts table', () => {
    cy.contains('new account').should('be.visible');
  });

  // Editing account name
  it('should edit the new account name to edited account', () => {
    cy.contains('td', 'new account')
      .parent()
      .find('[data-cy="more-actions-button"]')
      .click();
    cy.get('[data-cy="edit-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'Edit Account');
    cy.get('[data-cy="account-name-input"]').should(
      'have.value',
      'new account'
    );

    cy.get('[data-cy="account-name-input"]')
      .focus()
      .clear()
      .type('edited account');
    cy.get('[data-cy="submit-account-button"]')
      .should('not.be.disabled')
      .click();
  });

  it('should display the edited account in accounts table', () => {
    cy.contains('edited account').should('be.visible');
  });

  // Account deletion
  it('should delete the edited account from the edit form', () => {
    cy.contains('td', 'edited account')
      .parent()
      .find('[data-cy="more-actions-button"]')
      .click();
    cy.get('[data-cy="edit-button"]').click();
    cy.get('[data-cy="delete-account-button"]').click();
    cy.get('[data-cy="confirm-button"]').click();
  });

  it('should display an empty accounts table after deletion', () => {
    cy.contains('td', 'edited account').should('not.exist');
  });
});
