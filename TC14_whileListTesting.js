describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234');
    })

    it("clickWoman", function() {
        cy.contains("Women").click()
        cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
        .and('eq', 'url("http://automationpractice.com/img/c/3-category_default.jpg")');
    })

    it("clickWhishlist", function() {
        cy.get("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)").click({force: true})
        cy.contains("Add to wishlist").click()
        cy.wait(2000)
        cy.get(".fancybox-error").contains("You must be logged in to manage your wishlist.").should('be.visible')
    })
})