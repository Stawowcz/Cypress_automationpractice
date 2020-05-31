describe("Login", function() {

    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
      })

    it('Sign in', function() {
        cy.get("#center_column >h1").should('have.text', 'My account')
        cy.get("#center_column > p").should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.') 
        cy.contains('Add my first address').click()
        cy.contains(' Back to your addresses').click()
        cy.contains('No addresses are available. ').should('be.visible') 
        cy.contains(' Back to your account').click()
        cy.contains('Order history and details').click()
        cy.contains("Here are the orders you've placed since your account was created").should('be.visible') 
        cy.contains("You have not placed any orders.").should('be.visible') 
        cy.contains(' Back to your account').click()
        cy.contains('My credit slips').click()
        cy.contains("Credit slips you have received after canceled orders.").should('be.visible') 
        cy.contains("You have not received any credit slips.").should('be.visible') 
        cy.contains(' Back to your account').click()
        cy.contains('My addresses').click()
        cy.contains('No addresses are available. ').should('be.visible')
        cy.contains(' Back to your account').click()
        cy.contains('My personal information').click()
        cy.contains('Your personal information').should('be.visible')
        cy.contains('Please be sure to update your personal information if it has changed. ').should('be.visible')
        cy.contains(' Back to your account').click()
        cy.contains('My wishlists').click()
        cy.contains('My wishlists').should('be.visible')
        cy.contains('New wishlist').should('be.visible')
        cy.contains('Top sellers').should('be.visible')
    })

    // it('Add my first address', function(){
    //     cy.contains('Add my first address').click()
        // cy.get("#center_column > div > h1").should('have.text', 'Your addresses')
        // cy.get('input[id="email"]').type('jakub123@gmail.com')
        // cy.get('input[id="passwd"]').type('k1234')
        // cy.get('#SubmitLogin').contains('Sign in').should('be.visible').click()

        
        
    // })
})