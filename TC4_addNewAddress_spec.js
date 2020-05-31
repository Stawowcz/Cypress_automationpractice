describe("Login", function() {

    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
      })
    it('Add new adress', function() {
        cy.get('ul.myaccount-link-list').children().contains('Add my first address').click()
        cy.get('form').within(($form) => {
            cy.get("input").eq(7).type("Bol1 Wrocław")
            cy.get("input").eq(8).type("Bol2 Wrocław")
            cy.get("input").eq(9).type("Wrocław")
            cy.get('select').eq(0).select("Alabama")
            cy.get('select').eq(0).select("Alaska")
            cy.get('select').eq(0).select("Arizona")
            cy.get('select').eq(0).select("California")
            cy.get('select').eq(0).select("Delaware")
            cy.get('select').eq(0).select("Florida")
            cy.get("input").eq(10).type("55432")
            cy.get("input").eq(11).type("55555555")
            cy.get("input").eq(12).type("55555555")
            cy.get("textarea").last().type("infoo")
            cy.contains("Save").click()
        })
        cy.contains('Dobra').should('be.visible')
        cy.contains('Bol1 Wrocław').should('be.visible')
        cy.contains('Wrocław, Florida 55432').should('be.visible')
        cy.contains('United States').should('be.visible')
        cy.contains('55555555').should('be.visible')
        cy.contains("Delete").click()
        cy.contains('No addresses are available. ').should('be.visible') 
        cy.contains(' Back to your account').click()
    })
})