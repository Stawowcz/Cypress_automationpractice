describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman();
    })

    // it("clickWoman", function() {
    //     cy.contains("Women").click()
    //     cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
    //     .and('eq', 'url("http://automationpractice.com/img/c/3-category_default.jpg")');
    // })

    it("clicOnLargerImgButtonAndColorChanges", function() {
        cy.get("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)").click({force: true})
        cy.get("#color_24").click()
        cy.get('#bigpic').invoke('attr', 'src').then((nextSrc) => {
            expect(nextSrc).to.equal("http://automationpractice.com/img/p/1/1/11-large_default.jpg")
          });
        cy.get('.span_link').click()
        cy.wait(2000)
        cy.get('.fancybox-image').invoke('attr', 'src').then((nextSrc) => {
            expect(nextSrc).to.equal("http://automationpractice.com/img/p/1/1/11-thickbox_default.jpg")
          });
        cy.get("#color_7").click({force: true})
        cy.get('#bigpic').invoke('attr', 'src').then((nextSrc) => {
            expect(nextSrc).to.equal("http://automationpractice.com/img/p/1/0/10-large_default.jpg")
          });
        cy.get('.span_link').click({force: true})
        cy.wait(2000)
        cy.get('.fancybox-image').invoke('attr', 'src').then((nextSrc) => {
            expect(nextSrc).to.equal("http://automationpractice.com/img/p/1/0/10-thickbox_default.jpg")
          });
    })





})