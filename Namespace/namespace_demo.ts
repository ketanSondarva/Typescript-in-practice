namespace Utility {
    export namespace payment {
        export function calculateAmount(price: number, quantity: number): number {
            return price * quantity;
        }
    }

    export function maxDiscountAllowed(noOfProducts: number): number {
        if (noOfProducts > 5) {
            return 15;
        } else {
            return 10;
        }
    }
    function privateFunction() {
        console.log("this is private function...");
    }
}