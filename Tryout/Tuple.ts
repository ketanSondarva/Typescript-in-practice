// Tuple type is a kind of array which accepts more than one predefined type of data. 
// Arrays are used to represent a collection of similar objects, whereas tuples are used to represent a collection of different objects.

// declaring a tuple:
let productAvailable: [string, boolean];

let nameOfProduct;
let isAvailable;

// assigning value to tuple:
productAvailable = ['Samsung Galaxy J7', true];

// adding new value to tuple:
productAvailable.push('Samsung Galaxy J5', false);

// logic to check product availability based on datatype of declared Tuple variable:
for (const item of productAvailable) {
    if(typeof item === 'string') {
        nameOfProduct = item;
    } else if(typeof item === 'boolean') {
        isAvailable = item;
        if(isAvailable) 
            console.log(`The product ${nameOfProduct} is available`);
        else
            console.log(`The product ${nameOfProduct} is not available`);
    }
}


