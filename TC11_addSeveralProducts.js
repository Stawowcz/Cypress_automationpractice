describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman()
    })

    it("addToCardSeveralItem", function() {
        cy.get("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)").click({force: true}) 
        for (let i = 0; i < 3; i++) {
            cy.get('a.btn:nth-child(4) > span:nth-child(1)').click();
          }
        for (let i = 1; i < 4; i++) {
            cy.get("#group_1").select(i.toString());
        }
        cy.get("button.exclusive > span:nth-child(1)").click()
        cy.contains("Product successfully added to your shopping cart").should('be.visible')
        cy.contains("There are 4 items in your cart.").should('be.visible')
        cy.contains("Printed Dress").should('be.visible')
        cy.get('#layer_cart_product_attributes').contains("Beige, L").should('be.visible')
        cy.get('.layer_cart_product_info > div:nth-child(3) > strong:nth-child(1)')
        .contains("Quantity").should('be.visible')
        cy.get('#layer_cart_product_quantity')
        .contains("4").should('be.visible')        
        cy.get(".layer_cart_product_info > div:nth-child(4) > strong:nth-child(1)")
        .contains("Total").should('be.visible')
        cy.get("#layer_cart_product_price")
        .contains("$203.96").should('be.visible')
        cy.get(".continue > span:nth-child(1)").click()

    })

    it("clickOnMinus", function() {
        cy.get(".icon-minus").click()
        // cy.get("#color_24").then($button => {
        //     if ($button.is(':visible')){
        //         $button.click()
        //         cy.get("li.selected")
        //         .should('be.visible')
        //     }
        // })
        cy.get("#color_24").click()
        cy.get("button.exclusive > span:nth-child(1)").click()
    })



})