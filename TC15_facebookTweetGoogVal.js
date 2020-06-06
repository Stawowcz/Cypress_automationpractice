describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234');
        cy.clickWoman();
    })
    
    it("clickFacebook", function() {
        cy.get("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)").click({force: true})
        cy.get('.facebook > a:nth-child(1)').should('have.attr', 'href', 'https://www.facebook.com/groups/525066904174158/')
        .should('have.attr', 'target', '_blank')
    })
    
    it("clickTwitter", function() {
        cy.get('.twitter > a:nth-child(1)').should('have.attr', 'href', 'https://twitter.com/seleniumfrmwrk')
        .should('have.attr', 'target', '_blank')

    })
    it("clickYoutube", function() {
        cy.get('.youtube > a:nth-child(1)').should('have.attr', 'href', 'https://www.youtube.com/channel/UCHl59sI3SRjQ-qPcTrgt0tA')
        .should('have.attr', 'target', '_blank')

    })
    it("clickGoogle++", function() {
        cy.get('.google-plus > a:nth-child(1)').should('have.attr', 'href', 'https://plus.google.com/111979135243110831526/posts')
        .should('have.attr', 'target', '_blank')

    })

    it("clickGoogle++", function() {
        cy.get('section#block_contact_infos.footer-block.col-xs-12.col-sm-4').should('have.attr', 'href', '"mailto:%73%75%70%70%6f%72%74@%73%65%6c%65%6e%69%75%6d%66%72%61%6d%65%77%6f%72%6b.%63%6f%6d"')
    })
})
