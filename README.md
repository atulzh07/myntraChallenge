# Snapdeal Test Automation Challenge



https://github.com/atulzh07/snapdeal_automation_challenge/assets/67971725/a3e38b8a-327c-45aa-8c11-a373b6f85ebc



## What Tools Did I Choose and Why?
The test was created with Cypress using Javascript as a programming language. Cypress is easy to use, fast, and debug with a rich UI.

## What Test Cases Did I Decide to Focus on and Why?
### Test Case 001: Wishlist: User Not Authenticated; should see a login iframe
**Business Perspective**
Authentication is the core feature of any application. 

This test aims to verify whether a user who has not logged in can see a login iFrame if they want to wishlist a product.

**Tests Demonstrated:**
- [x] Use of the iFrame in Cypress.

### Test Case 002: Enter Pincode & Sort from Low to High
**Business Perspective**
The purpose of this test is to test a scenario where user can enter their PIN code and sort the results in ascending order based on price.

**Tests Demonstrated**

- [x] Select a field, Enter a value, Update the results
- [x] Static Dropdown

### Test Case 003: Product: Clicking on a product redirects the user to its' respective page
**Business Perspective**

Users should be redirected to the exact page when they click an item.

**Tests Demonstrated**

- [x] Use of jQuery function to extract a value from the selected
- [x] Resolved promises for non-cypress command

### Test Case 004: Purchase a Product: Check if an item is available for a location, add it to the cart

**Business Perspective**

1. Verify if an item is available in a location. 

Tested using 
- New Delhi: Connaught Place Pincode
- Andaman and Nicobar Islands

2. Add available products to the cart

**Tests Demonstrated**

- [x] Use of Assertions for positive and negative test scenarios

### Test Case 005: Verify Cross Origin Urls: Play Store
**Business Perspective**

Users can navigate to the Google Play Store.

**Tests Demonstrated**

- [x] Handling Cross-Origin Url
