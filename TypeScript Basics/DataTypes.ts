// you can log out to see the type of the variable and value its hold:

// boolean
let isSelected : boolean = true;

// number: can be integral or non-integral number:
let price: number = 230.3;

// string datatype:
let fName: string = 'ketan';
let message: string = `hello ${fName}`;
let catalog: string = `
Product catalog:
purchase by: ${fName}
total price: ${price}
`;

// any datatype:
let myObj: any = {name: 'ketan', age: 19};

// void datatype: when there is no data type that can be assigned: (used in function's return type)
function myFunc(n: number): void {
    return;
}

// when we declare one variable with specific type we can assign value of other type i.e.:
// fName = 234;  // uncomment the code and hover to see the error

console.log(typeof price);
console.log(typeof catalog);
console.log(typeof myObj);
console.log(typeof myFunc);


// new datatype: enum:

enum MobilePrice {Black = 25000, Gold, White}; // gold will be 25001 and white will be 25002

console.log(MobilePrice.Gold);

