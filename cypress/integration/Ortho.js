const helper = require("../support/helper")

describe('Basic checklist', function () {
    it('Login', function () {
        cy.visit('/login')
        //cy.get('button[id="category"]').click() here button must be replaced with the label of element like div,select
        cy.get('input[id="username"]')
            .type('mac')
        cy.get('input[name="password"]')
            .type('Mac@123')
        cy.get('.mdl-button__ripple-container').click()

    })

    it('add patient file', function () {

        //cy.get('div[class="loading-overlay"]',{timeout: 20000}).should("not.be.visible")
        cy.get('.primary')
            .should('contain', 'Add New Patient')
            .click({ waitForAnimations: false })
        cy.wait(10)
        //first name
        //helper.textfield('id','text')
        helper.textfield('mdl-textfield-10', 'Basic')
        //middle name
        helper.textfield('mdl-textfield-11', 'Basic')
        //second name
        helper.textfield('mdl-textfield-12', 'Basic')
        //Nick name
        helper.textfield('mdl-textfield-13', 'Basic')
        //DOB
        helper.textfield('mdl-textfield-14', '12/12/2000')
        //HID
        helper.textfield('mdl-textfield-16', helper.randomid())
        //gender checkbox
        cy.get('mdl-radio[value="F"]').click()
        //Risk category 
        //helper.dropdown("css selector",list id)
        helper.dropdown("Risk Category", 1)

        //Practice location
        helper.dropdown("Practice Location", 377)

        //Referral Sources
        cy.get(`input[id=mdl-textfield-17]`).click()
        cy.get(`#referral_source > a:nth-of-type(1)`).click()

        //Parent section
        //First name
        helper.textfield('mdl-textfield-19', 'Parent')

        //Initial Treatment Preference
        helper.dropdown("Initial Treatment Preference", 1115)

        //Middle name
        helper.textfield('mdl-textfield-20', 'Parent')

        //last name
        helper.textfield('mdl-textfield-21', 'Parent')

        //Nickname
        helper.textfield('mdl-textfield-22', 'Parent')

        //DOB
        helper.textfield('mdl-textfield-23', '12/12/2000')

        //Relationship
        helper.dropdown("Relationship", "mother")

        //Parent ortho rela[se cehckbox]
        cy.get('.mdl-checkbox__ripple-container').click()

        //Street addr1
        helper.textfield('mdl-textfield-25', 'street1')
        helper.textfield('mdl-textfield-26', 'street2')

        //city
        helper.textfield('mdl-textfield-27', 'city')

        //Country
        cy.get("[ng-reflect-label='Country'] [placeholder]").click()
        cy.get("mdl-option:nth-of-type(5) .mdl-list__item-primary-content").click()

        //Province
        helper.dropdown("State", 72)

        //ZIP
        helper.textfield('mdl-textfield-32', 11111)


        //email
        helper.textfield('mdl-textfield-28', 'csicoet18@gmail.com')

        //cemail
        helper.textfield('mdl-textfield-29', 'csicoet18@gmail.com')

        //phone
        helper.textfield('mdl-textfield-30', '888-888-8888')

        //preffereed method
        cy.get(".long-text [placeholder]").click()
        cy.get("[ng-reflect-value='email'] .mdl-list__item-primary-content").click()

        cy.get('.send-tx-plan > .mdl-button__ripple-container').click()
    })

    it('create tx plan', function () {
        cy.url().should('include', '/patient/treatment-plan')
        //First tx plan
        helper.txoptions()

        //Second treatment
        cy.get(".options-checkbox-section > div:nth-of-type(1) > div:nth-of-type(3) span:nth-of-type(4)").click()
        helper.txoptions()



    })

    it("OrthoAccept submit", function () {
        cy.url().should('contains', '/ortho-accept/')
    })

})