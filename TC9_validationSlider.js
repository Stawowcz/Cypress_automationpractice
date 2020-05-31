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

    it("scrollSlider", function() {
        // cy.get("#layered_price_slider > a:nth-child(2)")
        // .invoke('val', 200)
        // .trigger('input')
        // .click()
        cy.get("#layered_price_slider > a:nth-child(3)")
        .trigger('mousedown', { which: 1 }, { force: true })
        .trigger('mousemove', {clientX: 500, clientY: 0}, {force: true})
        .trigger('mouseup', -200, 0, {force: true})
    })
});