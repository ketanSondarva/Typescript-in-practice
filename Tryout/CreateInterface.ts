// declaring the interface:

interface Product {
    productId: number;
    productName: string;
}

function getProductDetail(productobj: Product): string {
    return "The product name: "+productobj.productName;
}

// declaring the product object having the interface properties:
const productObject = {productId: 1001, productName: 'Iphone 15 Pro'};

// invoking the product detail function:
const productDetails: string = getProductDetail(productObject);

// displaying the result:
console.log(productDetails);
