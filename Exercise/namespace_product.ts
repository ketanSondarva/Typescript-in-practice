namespace ProductUtility {
    export class $products { // used '$' because class 'products' already defined
        pId: number;
        productName: string;
        productPrice: number;
        productAvailable: boolean;
        imageUrl: string;
        productDescription: string;
    
        constructor(pId: number, productName: string, productPrice: number, productAvailable: boolean, imageUrl: string, productDescription: string) {
            this.pId = pId;
            this.productName = productName;
            this.productPrice = productPrice;
            this.productAvailable = productAvailable;
            this.imageUrl = imageUrl;
            this.productDescription = productDescription;
        }
    }
}