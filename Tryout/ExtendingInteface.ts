// declaring Category inteface:

interface Category {
    categoryName: string;
}

// defining productinterface:
interface Product {
    productName: string;
    productId: number;
}

// defining ProductList inteface which extends from Category and product:
interface ProductList extends Category, Product {
    list: Array<string>;
}

// declaring a variable which is type of ProductList inteface:
const productDetails: ProductList = {
    categoryName: 'Gadget',
    productName: 'Mobile',
    productId: 1234,
    list: ['Samsung','Iphone','Realme']
} 

// assigning list value of productDetails variable into another variable:
const listProduct = productDetails.list;

// assigning productName of productDetails variable into another variable:
const pname: string = productDetails.productName;

// desplaying the gathered value:
console.log("Category of product: "+pname);
console.log("List of products: "+listProduct);