describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman();
    })

    it("whiteColor", function() {
        cy.contains("Women").click()
        cy.get('[id="layered_id_attribute_group_8"]').should('have.css', 'background-color')
        .and('eq', 'rgb(255, 255, 255)');
    })

    it("blackColor", function() {
        cy.contains("Women").click()
        cy.get('[id="layered_id_attribute_group_11"]').should('have.css', 'background-color')
        .and('eq', 'rgb(67, 74, 84)');
    })

    it("orangeColor", function() {
        cy.contains("Women").click()
        cy.get('[id="layered_id_attribute_group_13"]').should('have.css', 'background-color')
        .and('eq', 'rgb(243, 156, 17)');
    })

    it("blueColor", function() {
        cy.contains("Women").click()
        cy.get('[id="layered_id_attribute_group_14"]').should('have.css', 'background-color')
        .and('eq', 'rgb(93, 156, 236)');
    })

    it("greenColor", function() {
        cy.contains("Women").click()
        cy.get('[id="layered_id_attribute_group_15"]').should('have.css', 'background-color')
        .and('eq', 'rgb(160, 212, 104)');
    })

    it("yellowColor", function() {
        cy.contains("Women").click()
        cy.get('[id="layered_id_attribute_group_16"]').should('have.css', 'background-color')
        .and('eq', 'rgb(241, 196, 15)');
    })
})
