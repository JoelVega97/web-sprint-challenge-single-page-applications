it('can navigate to http://localhost:3000/pizza', () => {
    cy.visit('http://localhost:3000/pizza')
})

it('can put text in text boxes', () => {
    cy.get('input[name = "name"')
        .type('John')
        .should('have.value', 'John')

    cy.get('input[name = "specialInfo"')
        .type('Boneless')
        .should('have.value', 'Boneless')
})

it('can check the check boxes', () => {
    cy.get('input[name = "pepperoni"]')
    .check()
    .should('have.value', 'on')
    
    cy.get('input[name = "sausage"]')
    .check()
    .should('have.value', 'on')

    cy.get('input[name = "onions"]')
    .check()
    .should('have.value', 'on')
    
})

it('can submit', () => {
    cy.get('select[name = "size"]')
    .select('small', 'Small')
    cy.get('button')
    .click()
})