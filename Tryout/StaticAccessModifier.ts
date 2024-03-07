// declaring the class with static access modifier:

class Item {
    static productPrice = 150;
    private productId: number;
    public productName: string;
    protected productCategory: string;

    // declaration of constructor with 3 parameters:
    constructor(productId: number, productName: string, productCategory: string) {
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
    }

    // method to display product details:
    getProductId() {
        console.log("Product category is: "+this.productId);
    }
}

// declaring a Gadgets class extending properties form Product class:
class Gadgets extends Item {
    // method to display productCategory property:
    getProduct():void {
        console.log("Product category: "+this.productCategory);
    }
}

// Gadgets class object creation:
const g: Gadgets = new Gadgets(1234, 'Mobile', 'SmartPhone');
// invoking getProduct method with the help of Gadgets object:
g.getProduct();

// invoking getProductId method with the help of Gadgets object:
g.getProductId();

// displaying the instance variable of class:
console.log("Product name: "+g.productName);

// displaying the static value:
console.log("Price: "+Item.productPrice+"/-");

