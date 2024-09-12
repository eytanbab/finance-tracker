describe('Navigation', () => {
  // Sign in before all tests
  beforeEach(() => {
    cy.visit('/');
    cy.clerkSignIn({
      strategy: 'password',
      identifier: 'testuser@gmail.com',
      password: '123456',
    });
    cy.visit('/');
  });

  //Desktop View
  context('Desktop Navigation', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.visit('/');
    });

    it('should have all navigation links visible', () => {
      cy.get('[data-cy="nav-button-overview"]').should('be.visible');
      cy.get('[data-cy="nav-button-transactions"]').should('be.visible');
      cy.get('[data-cy="nav-button-accounts"]').should('be.visible');
      cy.get('[data-cy="nav-button-categories"]').should('be.visible');
    });

    it('should navigate to overview page', () => {
      cy.get('[data-cy="nav-button-overview"]').click();
      cy.url().should('include', '/');
    });

    it('should navigate to transactions page', () => {
      cy.get('[data-cy="nav-button-transactions"]').click();
      cy.url().should('include', '/transactions');
    });

    it('should navigate to accounts page', () => {
      cy.get('[data-cy="nav-button-accounts"]').click();
      cy.url().should('include', '/accounts');
    });

    it('should navigate to categories page', () => {
      cy.get('[data-cy="nav-button-categories"]').click();
      cy.url().should('include', '/categories');
    });
  });

  // Mobile View
  context('Mobile Navigation', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
      cy.visit('/');
      cy.get('[data-cy=nav-button-open-sheet]').click();
    });

    it('should have all navigation links visible in mobile view', () => {
      cy.get('[data-cy="nav-button-overview"]').should('be.visible');
      cy.get('[data-cy="nav-button-transactions"]').should('be.visible');
      cy.get('[data-cy="nav-button-accounts"]').should('be.visible');
      cy.get('[data-cy="nav-button-categories"]').should('be.visible');
    });

    it('should navigate to overview page in mobile view', () => {
      cy.get('[data-cy="nav-button-overview"]').click();
      cy.url().should('include', '/');
    });

    it('should navigate to transactions page in mobile view', () => {
      cy.get('[data-cy="nav-button-transactions"]').click();
      cy.url().should('include', '/transactions');
    });

    it('should navigate to accounts page in mobile view', () => {
      cy.get('[data-cy="nav-button-accounts"]').click();
      cy.url().should('include', '/accounts');
    });

    it('should navigate to categories page in mobile view', () => {
      cy.get('[data-cy="nav-button-categories"]').click();
      cy.url().should('include', '/categories');
    });
  });
});
