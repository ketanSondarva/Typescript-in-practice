// declaring a Product class:
class Product {

    static productPrice: string;
    productId: number;

    // constructor declaration:
    constructor(productId: number) {
        this.productId = productId;
    }

    getProductId(): string {
        return "The product id is: "+this.productId;
    }
}

// creation of the product class object:
const product: Product = new Product(1234);

// displaying the result:
console.log(product.getProductId());
