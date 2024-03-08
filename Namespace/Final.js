var Utility;
(function (Utility) {
    var payment;
    (function (payment) {
        function calculateAmount(price, quantity) {
            return price * quantity;
        }
        payment.calculateAmount = calculateAmount;
    })(payment = Utility.payment || (Utility.payment = {}));
    function maxDiscountAllowed(noOfProducts) {
        if (noOfProducts > 5) {
            return 15;
        }
        else {
            return 10;
        }
    }
    Utility.maxDiscountAllowed = maxDiscountAllowed;
    function privateFunction() {
        console.log("this is private function...");
    }
})(Utility || (Utility = {}));
/// <reference path="./namespace_demo.ts"
var util = Utility.payment;
var paymentAmount = util.calculateAmount(1255, 6);
console.log("Amount to be paid: ".concat(paymentAmount));
var discount = Utility.maxDiscountAllowed(6);
console.log("Max allowed discount is: ".concat(discount));
