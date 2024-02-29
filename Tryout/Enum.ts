// declaring the enum variable and assigning the default value:
enum MobilePrice {Black = 250, Gold = 280, White = 300};

// function to calculate final amount:

function calculateAmount(price: number): number {
    let discount: number;
    let toatlAmount: number;

    if(price === MobilePrice.Gold) {
        discount = 5;
    } else if (price == MobilePrice.White) {
        discount = 8;
    } else {
        discount = 10;
    }

    toatlAmount = price - price * discount / 100;
    return toatlAmount;
}

// original price:
console.log("Actual price of the mpbile is ",MobilePrice.Black);
// price after the calculating the discount:
console.log("The final price after the discount is ",calculateAmount(MobilePrice.Black));

