
// declaring the interface with optional parameter:
interface car {
    carId?: number;
    carName: string;
}

// logic to display the Product details with interface  as parameter:
function getCarDetails(carObj: car): string {
    return "The name of the car: "+carObj.carName;
}

// declaring a variable along with interface properties:
const carObj = {carName: 'Mercedes Benz', modelNo: 54392};

// invoking car details function:
const carDetails: string = getCarDetails(carObj);

// displaying the result:
console.log(carDetails);