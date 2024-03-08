const productName: string = "Samsung Galaxy Note 7";
const productPrice: number = 699;
const productStatus: string = "Available";


const pName = document.getElementById("pName");
if(pName) pName.innerText = productName;
console.log(pName)

const pAvailable = document.getElementById("pAvailable");
if(pAvailable) pAvailable.innerText = productStatus;

const pPrice =  document.getElementById("pPrice");
if(pPrice) pPrice.innerText += productPrice;

enum ColorPrice {gp = 699, pg = 650, st = 712};

const GoldPlatinum = document.getElementById("gold");
const PinkGold = document.getElementById("pinkgold");
const SilverTitanium = document.getElementById("silver");

if(GoldPlatinum) GoldPlatinum.innerText += ColorPrice.gp;
if(PinkGold) PinkGold.innerText += ColorPrice.pg;
if(SilverTitanium) SilverTitanium.innerText += ColorPrice.st;


// before learning the interface concepts:
// the type of array will be 'any'
// const products: any [] = [
//     {pId:432,productName:"Samsung Galaxy Note 7",productPrice:699,productAvailable:true,imageUrl:"SamsungGalaxy_Gold.jpg",
//     productDescription:"Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."},

//     {pId:433,productName:"Samsung Galaxy S6 Edge",productPrice:630,productAvailable:true,imageUrl:"SamsungGalaxy_Gold.jpg",
//     productDescription:"Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory."},

//     {pId:434,productName:"Nokia Lumia 640XL",productPrice:223,productAvailable:false,imageUrl:"SamsungGalaxy_Gold.jpg",
//     productDescription:"Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory."}
// ];



// // after learning the interface concepts:
interface product {
    pId: number;
    productName: string;
    productPrice: number;
    productAvailable: boolean;
    imageUrl: string;
    productDescription: string;
}

// // type of array will be product(interface)
// const products: product [] = [
//     {pId:432,productName:"Samsung Galaxy Note 7",productPrice:699,productAvailable:true,imageUrl:"SamsungGalaxy_Gold.jpg",
//     productDescription:"Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."},

//     {pId:433,productName:"Samsung Galaxy S6 Edge",productPrice:630,productAvailable:true,imageUrl:"SamsungGalaxy_Gold.jpg",
//     productDescription:"Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory."},

//     {pId:434,productName:"Nokia Lumia 640XL",productPrice:223,productAvailable:false,imageUrl:"SamsungGalaxy_Gold.jpg",
//     productDescription:"Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory."}
// ];

// for(let i = 0; i < 3; i++) {
//     const mobileName = document.getElementById("pName"+i);
//     const mobilePrice = document.getElementById("pPrice"+i);
//     const availability = document.getElementById("pAvailable"+i);

//     if(mobileName) mobileName.innerText += products[i].productName;
//     if(mobilePrice) mobilePrice.innerText += products[i].productPrice;
//     if(availability) availability.innerText += products[i].productAvailable ? "Available" : "Out Of Stock";
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// above same implementation using the class concepts:
class $products { // used '$' because class 'products' already defined
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
} // note: you can also implement the 'product' interface(declared above) in this class !!

const prod1 = new $products(432,"Samsung Galaxy Note 7",699,true,"SamsungGalaxy_Gold.jpg","Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory.");
const prod2 = new $products(433,"Samsung Galaxy S6 Edge",630,true,"SamsungGalaxy_Gold.jpg","Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory.");
const prod3 = new $products(434,"Nokia Lumia 640XL",223,false,"SamsungGalaxy_Gold.jpg","Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory.");


const $prods : $products [] = [ prod1,prod2,prod3 ];

for(let i = 0; i < 3; i++) {
    const mobileName = document.getElementById("pName"+i);
    const mobilePrice = document.getElementById("pPrice"+i);
    const availability = document.getElementById("pAvailable"+i);

    if(mobileName) mobileName.innerText += $prods[i].productName;
    if(mobilePrice) mobilePrice.innerText += $prods[i].productPrice;
    if(availability) availability.innerText += $prods[i].productAvailable ? "Available" : "Out Of Stock";
}
