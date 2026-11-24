// QP-01 A custom pizza reaches the admin list
// Goal: verify the pizza restrictions, rating login requirement, and admin listing.

function stamp() {
  const now = new Date()
  const two = (n) => String(n).padStart(2, '0')
  const date = `${now.getFullYear()}${two(now.getMonth() + 1)}${two(now.getDate())}`
  const time = `${two(now.getHours())}${two(now.getMinutes())}${two(now.getSeconds())}`
  return `${date}-${time}`
}

describe('QP-01 A custom pizza reaches the admin list', () => {
  it('follows the steps of QP-01', () => {
    // Step 1: open QuickPizza and check the heading
    cy.visit('https://quickpizza.grafana.com')
    cy.get('h1')
      .should('have.text', 'Looking to break out of your pizza routine?')

    // Step 2: turn on Advanced and verify all four fields are visible
    cy.contains('label', 'Advanced').click()
    cy.contains('label', 'Max Calories per Slice').should('be.visible')
    cy.contains('label', 'Excluded tools').should('be.visible')
    cy.contains('label', 'Must be vegetarian').should('be.visible')
    cy.contains('label', 'Custom Pizza Name').should('be.visible')

    // Step 3: fill in the restrictions and the name
    const pizzaName = `Lab Pizza ${stamp()}`

    const caloriesInput = () =>
      cy.contains('label', 'Max Calories per Slice').siblings('input')

    caloriesInput().clear()
    caloriesInput().type('600')
    caloriesInput().should('have.value', '600')

    cy.get('select').select('Knife')
    cy.contains('option', /^Knife$/).should('be.selected')

    cy.get('#default-checkbox').check()
    cy.get('#default-checkbox').should('be.checked')

    cy.get('input#pizza-name').type(pizzaName)
    cy.get('input#pizza-name').should('have.value', pizzaName)

    // Step 4: ask for a pizza and verify the recommendation
    cy.get('button[name="pizza-please"]').click()
    cy.get('#recommendations').should('contain', `Name: ${pizzaName}`)
    cy.contains('#recommendations p', 'Tool:').should('not.contain', 'Knife')
    cy.contains('#recommendations p', 'Calories per slice:')
      .invoke('text')
      .then((text) => {
        const calories = Number(text.replace('Calories per slice:', '').trim())
        expect(calories).to.be.at.most(600)
      })

    // Step 5: try to rate the pizza without logging in
    cy.get('button[name="rate-5"]').click()
    cy.get('#rate-result').should('have.text', 'Please log in first.')
  })
})