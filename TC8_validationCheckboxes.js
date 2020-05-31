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
    it("checkboxCategories", function() {
        cy.get("#ul_layered_category_0 > li > div").each($button => {
            if ($button.is(':visible')){
                cy.wrap($button).click()
                cy.get($button)
                .parent()
                .find('input')
                .should('be.checked')
                cy.wrap($button).click()
                .parent()
                .find('input')
                .should('not.be.checked')
            }
            })
        })

    it("checkboxSizes", function() {
        cy.get("#ul_layered_id_attribute_group_1 > li > div").each($button => {
            if ($button.is(':visible')){
                cy.wrap($button).click()
                cy.get($button)
                .parent()
                .find('input')
                .should('be.checked')
                cy.wrap($button).click()
                .parent()
                .find('input')
                .should('not.be.checked')
            }
          })
        })
    
    it("checkboxCompositions", function() {
        cy.get("#ul_layered_id_feature_5 > li > div").each($button => {
            if ($button.is(':visible')){
                cy.wrap($button).click()
                cy.get($button)
                .parent()
                .find('input')
                .should('be.checked')
                cy.wrap($button).click()
                .parent()
                .find('input')
                .should('not.be.checked')
            }
            })
        })
    it("checkboxStyles", function() {
        cy.get("#ul_layered_id_feature_6 > li > div").each($button => {
            if ($button.is(':visible')){
                cy.wrap($button).click()
                cy.get($button)
                .parent()
                .find('input')
                .should('be.checked')
                cy.wrap($button).click()
                .parent()
                .find('input')
                .should('not.be.checked')
            }
            })
        })
        it("checkboxProperties", function() {
            cy.get("#ul_layered_id_feature_7 > li > div").each($button => {
                if ($button.is(':visible')){
                    cy.wrap($button).click()
                    cy.get($button)
                    .parent()
                    .find('input')
                    .should('be.checked')
                    cy.wrap($button).click()
                    .parent()
                    .find('input')
                    .should('not.be.checked')
                }
                })
            })
        it("checkboxAvailibility", function() {
            cy.get("#ul_layered_quantity_0 > li > div").each($button => {
                if ($button.is(':visible')){
                    cy.wrap($button).click()
                    cy.get($button)
                    .parent()
                    .find('input')
                    .should('be.checked')
                    cy.wrap($button).click()
                    .parent()
                    .find('input')
                    .should('not.be.checked')
                }
                })
            })
        it("checkboxManufacturer", function() {
            cy.get("#ul_layered_manufacturer_0 > li > div").each($button => {
                if ($button.is(':visible')){
                    cy.wrap($button).click()
                    cy.get($button)
                    .parent()
                    .find('input')
                    .should('be.checked')
                    cy.wrap($button).click()
                    .parent()
                    .find('input')
                    .should('not.be.checked')
                }
                })
            })
        it("checkboxContidionr", function() {
            cy.get("#ul_layered_condition_0 > li > div").each($button => {
                if ($button.is(':visible')){
                    cy.wrap($button).click()
                    cy.get($button)
                    .parent()
                    .find('input')
                    .should('be.checked')
                    cy.wrap($button).click()
                    .parent()
                    .find('input')
                    .should('not.be.checked')
                }
                })
            })
})