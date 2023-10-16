/// <reference types = "Cypress" />
import 'cypress-iframe'
Cypress.on('uncaught:exception', () => { return false })

const url = Cypress.env('baseUrl')
describe('test cases for myntra home furnishing', () => {
    beforeEach(() => {
        cy.visit(url);
    })
    it('Test Case 001: Wishlist: Unauthenticated user; should see a login iframe', () => {
        cy.get(".categoryShortlist > .shortlist-icon-wrpr > .animated-icon > .sd-icon").as('wishlist');
        cy.get('@wishlist').should('have.length', 20);
        cy.get('@wishlist').first().click();
        cy.frameLoaded('#loginIframe');
        cy.iframe('#loginIframe').contains('Login Using');
    })
    it("Test Case 002: Enter Pincode & Sort Price:Low to High", () => {
        cy.get('.pincode-enter > .sd-input').type('110001');
        cy.contains('Check').click();
        cy.get('.sort-selected').click();
        cy.get('[data-sorttype="plth"]').click();
        cy.wait(4000);
    })
    it("Test Case 003: Product: Clicking on a product redirects the user to its' respective page", () => {
        cy.get('.product-tuple-description > .product-desc-rating > .dp-widget-link > .product-title').first()
        .invoke('text').then(function(text){
            const productTitle = text;
            cy.log(productTitle);
            cy.get('.product-tuple-image > a').first().invoke('removeAttr', 'target').click();
            cy.get('.pdp-e-i-head').contains(productTitle);
        })
    })
    it("Test Case 004: Purchase a Product: Check if an item is available for a location, add it to the cart", () => {
        cy.get('.product-tuple-image > a').first().invoke('removeAttr', 'target').click();
        cy.get('#pincode-check').type('744303{enter}');
        cy.get('.no-deli-pin-code').contains('Item not available at this location');
        cy.get('#pincode-check').clear().type('110001{enter}');
        cy.get('#add-cart-button-id').click();
        cy.get('.cartQuantity').should('have.text',1);
        cy.get('.marR5').click();
        cy.get('#checkout-login > .extraLargeFont').contains("Log In");
    })
    it("Test Case 005: Verify Cross Origin Urls: Play Store", () => {
        cy.get('.notIeLogoHeader.hashAdded > .notIeLogoHeader').click();
        cy.scrollTo('center');
        cy.get('#ajaxWidget-download_App-0 > div > div.downloadAppTextCont > div.greatDealsBtnCont > a:nth-child(2)').invoke('removeAttr', 'target').click()

        cy.origin('play.google.com/', () => {
            cy.get('.Fd93Bb > span').contains('Snapdeal');
        })
    })
})