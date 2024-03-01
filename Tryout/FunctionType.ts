// delcaring function:
function createCustomerId(name: string, id: number):string {
    return "The name of customer is "+name+" and his customer id: "+id;
} 

// declaring interface with function type:
interface StringGenerator {
    (chars: string, nums: number): string;
}

// creating refrence variable of above declared interface:
let idGenerator: StringGenerator;

// assigning function to inteface refrence variable:
idGenerator = createCustomerId;

// declaring the string parameter to hold return value of the function type interface
const customerId: string = idGenerator('Mr.john',501);

// displaying the result:
console.log(customerId);