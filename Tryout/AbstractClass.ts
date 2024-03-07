// Example is developed to practice the concepts of abstraction and inheritance, nothing to do with real life bank scenario

// abstract class declaration:
abstract class Bank {
    getLoanInterestRate(): number {
        return 2.48;
    }

    abstract getBankName(): string;
}

// extending abstract class and provide the implementation:
class Axis extends Bank {
    getBankName(): string {
        return "Axis";
    }
    getLoanInterestRate(): number {
        return super.getLoanInterestRate();
    }
}

// extending abstract class and provide the implementation:
class ICICI extends Bank {
    getBankName(): string {
        return "ICICI";
    }
    getLoanInterestRate(): number {
        return super.getLoanInterestRate() + 0.32;
    }
}

class AxisHomeLoan extends Axis {
    durationInYear: number;
    accountNumber: number;

    constructor(accountNumber: number, durationInYear: number) {
        super();
        this.accountNumber = accountNumber;
        this.durationInYear = durationInYear;
    }

    getTotalInterestRate(accNumber: number): number {
        console.log(super.getLoanInterestRate());
        if(accNumber == 324) 
            return super.getLoanInterestRate() * this.durationInYear;
        else 
            return -1;
    }
}

const axis = new Axis();

console.log(axis.getBankName() + "bank provides loan with "+axis.getLoanInterestRate() + "interest rate.")

const homeLoan = new AxisHomeLoan(324, 2);

const totalInterestRate: number = homeLoan.getTotalInterestRate(324);

if(totalInterestRate != -1) {
    console.log("Account number: "+homeLoan.accountNumber+" has to pay total "+totalInterestRate+ "% interest")
} else {
    console.log("Something went wrong while fetching interest rate!")
}
