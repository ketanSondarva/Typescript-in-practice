// exporting function:
export function greeting(): string {
    return "hello there, welcome to the easyShop";
}

// exporting variable:
export const name:string = "easyShop";

class Utility {
    CalculateAmount(price: number, quantity: number): number {
        return price * quantity;
    }
}

interface Category {
    getCategory(productId: number): string;
}

// exporting interface Category and class Utility as 'mainUtility':
export {Utility as mainUtility, Category};


// this is default export, notice that class is anonymous:
export default class {
    hello():string {
        return "hello world";
    }
}