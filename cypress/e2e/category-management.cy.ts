describe('Category management', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clerkSignIn({
      strategy: 'password',
      identifier: 'testuser@gmail.com',
      password: '123456',
    });
    cy.visit('/categories');
  });

  // New category creation
  it('should create a new category named new category', () => {
    cy.get('[data-cy="add-new-category-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'New Category');
    cy.get('[data-cy="category-name-input"]').type('new category');
    cy.get('[data-cy="submit-category-button"]').click();
  });

  it('should display the new category in category table', () => {
    cy.contains('new category').should('be.visible');
  });

  // Editing category name
  it('should edit the new category name to edited category', () => {
    cy.contains('td', 'new category')
      .parent()
      .find('[data-cy="more-actions-button"]')
      .click();
    cy.get('[data-cy="edit-button"]').click();
    cy.get('[data-cy="form-title"]').should('contain.text', 'Edit Category');
    cy.get('[data-cy="category-name-input"]').should(
      'have.value',
      'new category'
    );

    cy.get('[data-cy="category-name-input"]')
      .focus()
      .clear()
      .type('edited category');
    cy.get('[data-cy="submit-category-button"]')
      .should('not.be.disabled')
      .click();
  });

  it('should display the edited category in categories table', () => {
    cy.contains('edited category').should('be.visible');
  });

  // Category deletion
  it('should delete the edited category from the edit form', () => {
    cy.contains('td', 'edited category')
      .parent()
      .find('[data-cy="more-actions-button"]')
      .click();
    cy.get('[data-cy="edit-button"]').click();
    cy.get('[data-cy="delete-category-button"]').click();
    cy.get('[data-cy="confirm-button"]').click();
  });

  it('should display an empty categories table after deletion', () => {
    cy.contains('td', 'edited category').should('not.exist');
  });
});
