describe('Form', () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })
    
    // Test for username
    it("should type a name into input", () => {
        const name = "liz";

        cy.get('input[name="username"]')
            .should('have.value', name)

    })

    // Test for email
    it("should type an email in the email input", () => {
        const email = "test@example.com";

        cy.get('input[name="email"]')
            .should('exist')
            .should('have.value', email);
    })

    // Test for password
    it("password should be written in password input", () => {
        const password = "123456";

        cy.get('input[name="password"]')
            .should('exist')
            .should('have.value', password);


    })    

    // Check if a user can check the terms of service box
    it("check if terms of service box is functional", () => {

        cy.get('input[name="tos"]')
            .should('exist').uncheck()
            .should('not.be.checked')
            .check()
            .should('be.checked')
            .uncheck()
    }) 

    // Check if a user can suubmit the form data
    it("check to see if user can submit the form data", () => {

        cy.contains('Name').find('input')
        .contains('Email').find('input')
        .contains('Password').find('input')
        .contains('Terms of Service').find('input')
        .contains('Create a Friend!').click()
        .contains('Form submitted successfully').should('be.visible')

    })

})