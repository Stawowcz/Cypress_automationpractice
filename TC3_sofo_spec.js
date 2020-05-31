describe("Login", function() {

    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
      })
    it('Add new adress', function() {
        cy.contains('Add my first address').click()
        cy.contains(' Back to your addresses').click()
        cy.contains('No addresses are available. ').should('be.visible') 
        cy.contains('Add a new address').click()
        cy.get("#address1").type("Bol1 Wrocław")
        cy.get("#city").type("Wrocław")
        cy.get('[id="id_state"]').select("Alabama")
        cy.get('[id="id_state"]').select("Alaska")
        cy.get('[id="id_state"]').select("Arizona")
        cy.get('[id="id_state"]').select("California")
        cy.get('[id="id_state"]').select("Delaware")
        cy.get('[id="id_state"]').select("Florida")
        cy.get("#phone").type("55555555")
        cy.get("#postcode").type("55432")
        cy.contains("Save").click()
        cy.contains('My address').should('be.visible') 
        cy.contains('Dobra').should('be.visible')
        cy.contains('Bol1 Wrocław').should('be.visible')
        cy.contains('Wrocław, Florida 55432').should('be.visible')
        cy.contains('United States').should('be.visible')
        cy.contains('55555555').should('be.visible')
        cy.contains("Delete").click()
        cy.contains('No addresses are available. ').should('be.visible') 
        cy.contains(' Back to your account').click()
    })

    it('Add new adress', function() {
        
        cy.get('myaccount-link-list').children().contains('Add my first address').click()

    })
})