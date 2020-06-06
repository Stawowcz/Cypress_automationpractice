describe('rollDownTopAndDress', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman()
    })

    it("sliderLeftMove", function() {
        cy.get('a.ui-slider-handle:nth-child(2)')
        .trigger("mousedown", { button: 1 }, { force: true })
        .trigger("mousemove", 50, 0, { force: true })
        .trigger("mouseup", { force: true });
    })

    it("sliderRightMove", function() {
        cy.get('a.ui-slider-handle:nth-child(3)')
        .trigger("mousedown", { button: 1 }, { force: true })
        .trigger("mousemove", -40, 0, { force: true })
        .trigger("mouseup", { force: true });
        cy.get("#layered_price_range")
        .should('have.text', '$24.14 - $43.38')
    })

 


})