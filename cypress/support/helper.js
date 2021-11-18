var helper = function(){
    
    this.textfield = function(e1, e2){
        cy.get(`input[id=${e1}]`)
            .clear()
            .type(e2)
            .should('have.value',e2)
    }

    this.dropdown = function(e1,e2){
        cy.get(`[ng-reflect-label='${e1}'] [placeholder]`)
            .click()
        cy.get(`[ng-reflect-value='${e2}'] .mdl-list__item-primary-content`)
            .click()
            
    }
    
    this.randomid = function(element){
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`
        return(testname)
    }

    this.txoptions = function(element){
        //existing family
        cy.get("[value='EXISTING_FAMILY'] > .mdl-radio__ripple-container").click()
        //Tx category
        cy.get('.treatment_category_id [placeholder]').click()
        cy.get("[ng-reflect-value='207'] .mdl-list__item-primary-content").click()

        //tx sub category
        cy.get(".treatment_complexity_id [placeholder]").click()
        cy.get("[ng-reflect-value='208'] .mdl-list__item-primary-content").click()

        //P insurance
        cy.get("[ng-reflect-disabled='false'][ng-reflect-ng-model='none'] .mdl-select__toggle").click()
        cy.get("[ng-reflect-value='300'] .mdl-list__item-primary-content").click()
        cy.get(".currency-unit-input[ng-reflect-disabled='false'] [placeholder]").click().type('100')

        //SInsurance
        cy.get("[ng-reflect-ng-model='none'] [placeholder]").click()
        cy.get("[ng-reflect-value='289'] > .mdl-list__item").click({ force: true })
        cy.get("[ng-reflect-model='0'][ng-reflect-label='Max Coverage'] [placeholder]").click().type('100')

        //misscallenious
        cy.get(".discount.col-4 .mdl-checkbox__ripple-container").click()
        cy.get("[ng-reflect-label='Miscellaneous Discount'] [placeholder]").click().type('10')

        //Referral doctor 
        cy.get(".search-dropdown-toggle-icon").click()
        cy.get("a[ng-reflect-ng-class='[object Object]']").click()

        //Doctor
        cy.get("[ng-reflect-label='Doctor'] [placeholder]").click()
        cy.get("[ng-reflect-value='3249'] .mdl-list__item-primary-content").click()


        //Parent ortho relapse
        cy.get(".parent-relapse-section .mdl-checkbox__ripple-container").click()
        cy.get("[ng-reflect-label='Parent Ortho Relapse Candidate'] [placeholder]").click()
        cy.get("[ng-reflect-value='MOTHER'] .mdl-list__item-primary-content").click()

        //case gallery
        cy.get(".view").click()
        cy.get(".all-cases > div:nth-of-type(1) .mdl-checkbox__ripple-container").click()

        //Tx time
        cy.get(".projected_treatment_time [placeholder]").click().type("10")

        //Plan price
        cy.get("[ng-reflect-label='Plan Price'] [placeholder]").should('be.visible').type("1000", {force:true})
        cy.get("[ng-reflect-label='Plan Price'] [placeholder]").should('be.visible').type("1000", {force:true})

        //Minimum down
        cy.get("[ng-reflect-label='Minimum Down Payment'] [placeholder]").should('be.visible').type('100', {force:true})
        
        //Extended Months
        cy.get(".lengthy-label [placeholder]").click().type('10')

        //Acc tx fee
        cy.get("[ng-reflect-label='Accelerated Treatment Fee'] [placeholder]").click().type('10')

        //Addnl Applnc
        cy.get(".less-height-dropdown [placeholder]").click()
        cy.get("[ng-reflect-value='58'] > .mdl-list__item").click()
        cy.get("[ng-reflect-label='Additional Appliance Fee'] [placeholder]").click().type('10')

        //Present btn
        cy.get(".present > .mdl-button__ripple-container").click()
    }
}

module.exports = new helper();