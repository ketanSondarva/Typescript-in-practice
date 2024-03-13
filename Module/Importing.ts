import Greet, { mainUtility, Category as CategoryDetail, greeting, name } from "./Exporting";

// note that: Greet is default exported, so '{}' not needed and we specify any name we want
// you can simply import: import Greet from "./Exporting";d

const util = new mainUtility();
const price = util.CalculateAmount(850, 4);

const shopName = name;
console.log(shopName);

const greetCustomer = greeting();
console.log(greetCustomer);

