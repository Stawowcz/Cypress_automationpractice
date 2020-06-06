describe('writeAReview', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman()
    })

    it("clickButtonCheckStar", function() {
        cy.get("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)").click({force: true})
        cy.contains("Be the first to write your review !").click()
        for (let i = 3; i < 8; i++) {
            cy.get("div.star:nth-child(" + i.toString() + ") > a:nth-child(1)").click()
            cy.get("div.star:nth-child(" + i.toString() + ")")
            .should('have.attr', 'class', 'star star_on')
        }
        cy.get(".cancel > a:nth-child(1)").click()
        for (let i = 3; i < 8; i++) {
            cy.get("div.star:nth-child(" + i.toString() + ")")
            .should('have.attr', 'class', 'star')
        }
    })

    it("checkRequiredFields", function() {
        cy.get(".fancybox-outer").then($body => {
            if (($body.find(".new_comment_form_content > label:nth-child(4) > sup:nth-child(1)").length > 0)) {
                cy.get(".new_comment_form_content > label:nth-child(4) > sup:nth-child(1)")
                .should('have.attr', 'class', 'required')
                cy.get(".new_comment_form_content > label:nth-child(6) > sup:nth-child(1)")
                .should('have.attr', 'class', 'required')
                }
            })
    })

    it("fullfillForm", function() {
        cy.get('.new_comment_form_content').within(($form) => {
            cy.get("input").eq(1).type("Jamal", {force: true})
            cy.get("textarea").first().type("jstwowcz@gmail.com", {force: true})
            cy.get("#submitNewMessage").click()
            cy.wait(2000)
        })
        // cy.get(".fancybox-outer").then($body => {
        //     if ($body.find("#sendEmail").length > 0) {
        //         cy.get("#sendEmail")
        //         .click()
        //     }
        // })
    })
})