// declaring the inteface:
interface Products {
    displayProductName: (productId: number) => string;
    getProductDetail(): string[];
}

// declaring gadget class which implements product interface:
class Gadget implements Products {
    getProductDetail(): string[] {
        return ['Samsung','Iphone','Realme'];
    }

    displayProductName(productId: number): string {
        if (productId === 101) {
            return 'Product Name is Mobile';
        } else if ( productId === 201) {
            return 'Product Name is Tablet';
        } else {
            return "product not available";
        }
    }

    getGadget(): string[] {
        return ['Mobile', 'Tablet', 'iPad', 'iPod'];
    }
}

// creating instance of class of interface type
const gadget: Products = new Gadget();

// creating variable to hold return value of displayProductName function
const productName: string = gadget.displayProductName(101);

// line to populate Product name on console
console.log(productName);