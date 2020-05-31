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

    it("validateHouseIcon", function() {
        cy.get("#columns > div.breadcrumb.clearfix > a.home > i").then($button => {
            if ($button.is(':visible')){
              $button.click()
            }
          })
    })


   
});