/// <reference path="./namespace_demo.ts">

import util = Utility.payment;

let paymentAmount = util.calculateAmount(1255, 6);
console.log(`Amount to be paid: ${paymentAmount}`);

let discount = Utility.maxDiscountAllowed(6);
console.log(`Max allowed discount is: ${discount}`);
