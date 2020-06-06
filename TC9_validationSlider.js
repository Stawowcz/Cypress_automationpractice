describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234');
        cy.clickWoman();
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