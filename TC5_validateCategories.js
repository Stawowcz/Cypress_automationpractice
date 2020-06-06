describe('womenSide', function() {
    Cypress.config("pageLoadTimeout", 100000)
    before(() => {
        cy.LogIn('jakub123@gmail.com', 'k1234')
        cy.clickWoman();
    })

    it("Click on Tops", () => {
        cy.contains("Tops").click({force: true})
        cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
        .and('eq', 'url("http://automationpractice.com/img/c/4-category_default.jpg")');
        cy.get('.content_scene_cat_bg').children().contains("Tops").should('be.visible')
        cy.get('.content_scene_cat_bg').children().children()
        .contains("Choose from t-shirts, tops, blouses, short sleeves, long sleeves, tank tops, 3/4 sleeves and more.").should('be.visible')
         cy.get('.content_scene_cat_bg').children().children()
         .contains("Find the cut that suits you the best!" ).should('be.visible')
      });
    
    it("Click on  T-shirts", () => {
        cy.contains("T-shirts").click({force: true})
        cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
        .and('eq', 'url("http://automationpractice.com/img/c/5-category_default.jpg")');
        cy.get('.content_scene_cat_bg').children().contains("T-shirts").should('be.visible')
        cy.get('.content_scene_cat_bg').children().children()
        .contains("The must have of your wardrobe, take a look at our different colors,").should('be.visible')
         cy.get('.content_scene_cat_bg').children().children()
         .contains("shapes and style of our collection!" ).should('be.visible')
      });
    
    it("Click on  Blouses", () => {
        cy.contains("Blouses").click({force: true})
        cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
        .and('eq', 'url("http://automationpractice.com/img/c/7-category_default.jpg")');
        cy.get('.content_scene_cat_bg').children().contains("Blouses").should('be.visible')
        cy.get('.content_scene_cat_bg').children().children()
        .contains("Match your favorites blouses with the right accessories for the perfect look.").should('be.visible')
      });

    it("Click on Dresses image", () => {
        cy.contains("Dresses").click({force: true})
        cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
        .and('eq', 'url("http://automationpractice.com/img/c/8-category_default.jpg")');
        cy.get('.content_scene_cat_bg').children().contains("Dresses").should('be.visible')
        cy.get('.content_scene_cat_bg').children().children()
        .contains("Find your favorites dresses from our wide choice of evening, casual or summer dresses!").should('be.visible')
         cy.get('.content_scene_cat_bg').children().children()
         .contains("We offer dresses for every day, every style and every occasion." ).should('be.visible')
      });

    it("Click on Casual Dresses image", () => {
        cy.contains("Casual Dresses").click({force: true})
        cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
        .and('eq', 'url("http://automationpractice.com/img/c/9-category_default.jpg")');
        cy.get('.content_scene_cat_bg').children().contains("Casual Dresses").should('be.visible')
        cy.get('.content_scene_cat_bg').children().children()
        .contains("You are looking for a dress for every day? Take a look at").should('be.visible')
         cy.get('.content_scene_cat_bg').children().children()
         .contains("our selection of dresses to find one that suits you." ).should('be.visible')
      });
    
      it("Click on Evening Dresses image", () => {
        cy.contains("Evening Dresses").click({force: true})
        cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
        .and('eq', 'url("http://automationpractice.com/img/c/10-category_default.jpg")');
        cy.get('.content_scene_cat_bg').children().contains("Evening Dresses").should('be.visible')
        cy.get('.content_scene_cat_bg').children().children()
        .contains("Browse our different dresses to choose the perfect dress for an unforgettable evening!").should('be.visible')
      });

      it("Click on Summer Dresses image", () => {
        cy.contains("Summer Dresses").click({force: true})
        cy.get('.content_scene_cat_bg').should('have.css', 'background-image')
        .and('eq', 'url("http://automationpractice.com/img/c/11-category_default.jpg")');
        cy.get('.content_scene_cat_bg').children().contains("Summer Dresses").should('be.visible')
        cy.get('.content_scene_cat_bg').children().children()
        .contains("Short dress, long dress, silk dress, printed dress, you will find the perfect dress for summer.").should('be.visible')
      });
    
})