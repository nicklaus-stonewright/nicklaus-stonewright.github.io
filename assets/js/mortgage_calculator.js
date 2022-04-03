
function Mortgage() {
    this.fixed_debt_outstanding = 0;
    this.borrowed_capital = 525000 - 52500;
    this.mortgage_duration = 300;
    this.fixed_interest_duration = 61;
    this.fixed_rate = 0.02;
    this.fix_instalment = 2000;
    this.variable_rate = 0.065;
    // this.fixed_debt_outstanding = 0;
    // this.borrowed_capital = 315000;
    // this.mortgage_duration = 300;
    // this.fixed_interest_duration = 61;
    // this.fixed_rate = 0.02;
    // this.fix_instalment = 1000;
    // this.variable_rate = 0.065;

    this.scream = function () {
        console.log('Aaaaaaa');
    }

    this.SetFixedDebtOutstanding = function (value) {
        this.fixed_debt_outstanding = value;
    }

    this.initializeVariables = function () {
        this.borrowed_capital = document.getElementById('house_price').value - document.getElementById('down_payment').value;
        this.mortgage_duration = document.getElementById('mortgage_duration').value;
        this.fixed_interest_duration = document.getElementById('fixed_interest_duration').value;
        this.fixed_rate = document.getElementById('fixed_duration_rate').value;
        this.fix_instalment = document.getElementById('fixed_duration_instalment').value;
        this.variable_rate = document.getElementById('variable_rate').value;
        console.log(this);
    }

    this.runMortgageCalculator = function () {
        this.calculateMortgageFixedTerm();
        this.calculateMortgageVariableTerm();
    }


    this.calculateMortgageFixedTerm = function () {
        let debt_outstanding = this.borrowed_capital
        for (let month = 0; month < this.fixed_interest_duration; month++) {
            let interest = debt_outstanding * this.fixed_rate / 12
            let capital_repaid = this.fix_instalment - interest
            debt_outstanding -= capital_repaid
            document.getElementById("Mortgage_Fixed_Term").innerHTML =
                `
                Monthly payment for the first ${this.fixed_interest_duration} months is  <b>£${this.fix_instalment}</b> <br/>
                Remaining Capital after the fixed term period <b>£${debt_outstanding.toFixed(2)}</b>
                `;
            this.SetFixedDebtOutstanding(debt_outstanding)
        }
    }

    this.calculateMortgageVariableTerm = function () {
        let variable_debt_outstanding = this.fixed_debt_outstanding;
        let lowerLimit = this.fix_instalment;
        let upperLimit = this.fix_instalment * 4;
        let instalment = (lowerLimit + upperLimit) / 2;
        while (variable_debt_outstanding !== 0) {
            // let total_paid_after = 0;
            console.log(variable_debt_outstanding);
            variable_debt_outstanding = this.fixed_debt_outstanding;
            for (let month = this.fixed_interest_duration; month < this.mortgage_duration; month++) {
                let variable_interest = variable_debt_outstanding * this.variable_rate / 12;
                let variable_capital_repaid = instalment - variable_interest;
                variable_debt_outstanding -= variable_capital_repaid;
                // total_paid_after += instalment;
            }
            if (variable_debt_outstanding < 0) {
                upperLimit = instalment;
                instalment = (lowerLimit + upperLimit) / 2;
                console.log('under', instalment, variable_debt_outstanding);
            }
            else if (variable_debt_outstanding > 0) {
                lowerLimit = instalment;
                instalment = (lowerLimit + upperLimit) / 2;
                console.log('over', instalment, variable_debt_outstanding);

            }
            if (variable_debt_outstanding.toFixed(0) == 0) {
                variable_debt_outstanding = 0;
                document.getElementById("Mortgage_Variable_Term").innerHTML =
                    `
                    Monthly payment for the variable term is  <b>£${instalment.toFixed(2)}</b>
                    `;
            }
        }

    }

}

const loan = new Mortgage();