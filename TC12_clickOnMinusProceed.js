describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
    })

    it("clickWoman", function() {
        cy.contains("Women").click()
        cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
        .and('eq', 'url("http://automationpractice.com/img/c/3-category_default.jpg")');
    })

    it("clickOnMinus", function() {
        cy.get("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)").click({force: true})
        for (let i = 0; i < 4; i++) {
            cy.get('a.btn:nth-child(4) > span:nth-child(1)').click();
        }
        for (let i = 0; i < 2; i++) {
            cy.get(".icon-minus").click()
        }
        cy.get("#color_24").then($button => {
            if ($button.is(':visible')){
                $button.click()
                cy.get("li.selected")
                .should('be.visible')
            }
        })
        // cy.get("#color_24").click()
        cy.get("button.exclusive > span:nth-child(1)").click()
        cy.get('#layer_cart_product_attributes').contains("Pink, S").should('be.visible')
        cy.get('.layer_cart_product_info > div:nth-child(3) > strong:nth-child(1)')
        .contains("Quantity").should('be.visible')
        cy.get('#layer_cart_product_quantity')
        .contains("3").should('be.visible')   
        cy.get(".continue").click()
        cy.get("button.exclusive > span:nth-child(1)").click()
        cy.get("a.btn:nth-child(2) > span:nth-child(1)").click()
        cy.contains('Shopping-cart summary').should('be.visible') 
    })



})