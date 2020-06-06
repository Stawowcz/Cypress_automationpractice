describe('colorIcon', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman()
    })

    // it("clickWoman", function() {
    //     cy.contains("Women").click()
    //     cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
    //     .and('eq', 'url("http://automationpractice.com/img/c/3-category_default.jpg")');
    // })

    it("checkRequiredFields", function() {
        cy.get("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)").click({force: true})
        cy.contains("Send to a friend").click({force: true})
        cy.get(".fancybox-outer").then($body => {
            if (($body.find("p.text:nth-child(2) > label:nth-child(1)").length > 0)) {
                cy.get("p.text:nth-child(2) > label:nth-child(1) > sup:nth-child(1)")
                .should('have.attr', 'class', 'required')
                cy.get("p.text:nth-child(3) > label:nth-child(1) > sup:nth-child(1)")
                .should('have.attr', 'class', 'required')
                }
            })
    })
    
    it("fullfillForm", function() {
        cy.get('.form_container').within(($form) => {
            cy.get("input").first().type("Jamal", {force: true})
            cy.get("input").eq(1).type("jstwowcz@gmail.com", {force: true})
        })
        cy.get(".fancybox-outer").then($body => {
            if ($body.find("#sendEmail").length > 0) {
                cy.get("#sendEmail")
                .click()
            }
        })
    })
    it("checkIfImageExists", function() {
        cy.get(".fancybox-outer").then($body => {
            if ($body.find("#send_friend_form > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)").length > 0) {
                cy.get("#send_friend_form > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)")
                .should('have.attr', 'alt', 'Printed Dress')  
                }
            })
        cy.wait(5000)
    })

    it("checkIfButtonExistsAndClick", function() {
        cy.get(".fancybox-inner").then($body => {
            if (($body.find("input.button").length > 0)
            && ($body.find("Send to a friend")) 
            && ($body.find("Your e-mail has been sent successfully"))) {
                cy.get("input.button").click()
                }
            })
    })
    
})