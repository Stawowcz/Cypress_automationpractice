describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234');
        cy.clickWoman();
    })

    it("clickAddToCard", function() {
        cy.get("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)").click({force: true}) 
        cy.get("button.exclusive > span:nth-child(1)").click()
        cy.contains("Product successfully added to your shopping cart").should('be.visible')
        cy.contains("There is 1 item in your cart.").should('be.visible')
        cy.get('span.ajax_cart_quantity:nth-child(2)').contains("1").should('be.visible')
        cy.get('.shopping_cart > a:nth-child(1) > b:nth-child(1)').contains("Cart").should('be.visible')
        cy.get('span.ajax_cart_product_txt:nth-child(3)').contains("Product").should('be.visible')
        cy.get(".icon-chevron-left").click()
        cy.get("button.exclusive > span:nth-child(1)").click()
        cy.contains("Product successfully added to your shopping cart").should('be.visible')
        cy.contains("There are 2 items in your cart.").should('be.visible')
        cy.get(".cross").click()
        cy.get('span.ajax_cart_quantity:nth-child(2)').contains("2").should('be.visible')
        cy.get('.shopping_cart > a:nth-child(1) > b:nth-child(1)').contains("Cart").should('be.visible')
        cy.get('span.ajax_cart_product_txt_s:nth-child(4)').contains("Products").should('be.visible')
    })
})