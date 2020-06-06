describe('rollDownTopAndDress', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman()
    })

    it("Tops", function() {
        cy.get("#categories_block_left > div:nth-child(2)\
         > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1)").click({force: true})
         cy.get("#categories_block_left > div:nth-child(2)\
          > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(3)")
         .should('have.attr', 'style', 'display: block;')
         cy.get("#categories_block_left > div:nth-child(2)\
         > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1)").click({force: true})
         cy.get("#categories_block_left > div:nth-child(2)\
         > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(3)")
        .should('have.attr', 'style', 'display: none;')
        
    })

    it("Dresses", function() {
        cy.get("#categories_block_left > div:nth-child(2)\
         > ul:nth-child(1) > li:nth-child(2) > span:nth-child(1)").click({force: true})
         cy.get("#categories_block_left > div:nth-child(2)\
          > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(3)")
         .should('have.attr', 'style', 'display: block;')
         cy.get("#categories_block_left > div:nth-child(2)\
         > ul:nth-child(1) > li:nth-child(2) > span:nth-child(1)").click({force: true})
         cy.get("#categories_block_left > div:nth-child(2)\
          > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(3)")
        .should('have.attr', 'style', 'display: none;')
        
    })

    it("topsLength", function() {
        cy.get("#categories_block_left > div:nth-child(2)\
         > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1)").
         should('have.length', 1)
    })

    it("dressesLength", function() {
        cy.get("#categories_block_left > div:nth-child(2)\
         > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1)").
         should('have.length', 1)
    })

})