describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman();
    })

    it("validateHouseIcon", function() {
        cy.get("#columns > div.breadcrumb.clearfix > a.home > i").then($button => {
            if ($button.is(':visible')){
              $button.click()
            }
          })
    })


   
});