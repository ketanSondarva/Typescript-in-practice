var ProductUtility;
(function (ProductUtility) {
    var $products = /** @class */ (function () {
        function $products(pId, productName, productPrice, productAvailable, imageUrl, productDescription) {
            this.pId = pId;
            this.productName = productName;
            this.productPrice = productPrice;
            this.productAvailable = productAvailable;
            this.imageUrl = imageUrl;
            this.productDescription = productDescription;
        }
        return $products;
    }());
    ProductUtility.$products = $products;
})(ProductUtility || (ProductUtility = {}));
/// <reference path="./namespace_product.ts">
var productName = "Samsung Galaxy Note 7";
var productPrice = 699;
var productStatus = "Available";
var pName = document.getElementById("pName");
if (pName)
    pName.innerText = productName;
console.log(pName);
var pAvailable = document.getElementById("pAvailable");
if (pAvailable)
    pAvailable.innerText = productStatus;
var pPrice = document.getElementById("pPrice");
if (pPrice)
    pPrice.innerText += productPrice;
var ColorPrice;
(function (ColorPrice) {
    ColorPrice[ColorPrice["gp"] = 699] = "gp";
    ColorPrice[ColorPrice["pg"] = 650] = "pg";
    ColorPrice[ColorPrice["st"] = 712] = "st";
})(ColorPrice || (ColorPrice = {}));
;
var GoldPlatinum = document.getElementById("gold");
var PinkGold = document.getElementById("pinkgold");
var SilverTitanium = document.getElementById("silver");
if (GoldPlatinum)
    GoldPlatinum.innerText += ColorPrice.gp;
if (PinkGold)
    PinkGold.innerText += ColorPrice.pg;
if (SilverTitanium)
    SilverTitanium.innerText += ColorPrice.st;
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
// interface product {
//     pId: number;
//     productName: string;
//     productPrice: number;
//     productAvailable: boolean;
//     imageUrl: string;
//     productDescription: string;
// }
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
var $product = ProductUtility.$products;
var prod1 = new $product(432, "Samsung Galaxy Note 7", 699, true, "SamsungGalaxy_Gold.jpg", "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory.");
var prod2 = new $product(433, "Samsung Galaxy S6 Edge", 630, true, "SamsungGalaxy_Gold.jpg", "Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory.");
var prod3 = new $product(434, "Nokia Lumia 640XL", 223, false, "SamsungGalaxy_Gold.jpg", "Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory.");
var $prods = [prod1, prod2, prod3];
for (var i = 0; i < 3; i++) {
    var mobileName = document.getElementById("pName" + i);
    var mobilePrice = document.getElementById("pPrice" + i);
    var availability = document.getElementById("pAvailable" + i);
    if (mobileName)
        mobileName.innerText += $prods[i].productName;
    if (mobilePrice)
        mobilePrice.innerText += $prods[i].productPrice;
    if (availability)
        availability.innerText += $prods[i].productAvailable ? "Available" : "Out Of Stock";
}
