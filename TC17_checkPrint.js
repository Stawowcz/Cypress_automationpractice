describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman()
    })

    it("checkRequiredFields", function() {
        cy.get("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)").click({force: true})
        cy.contains("Print").click({force: true})  
        cy.get(".print > a:nth-child(1)")
        .should('have.attr', 'href', 'javascript:print();')
    })
})