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
var products = [
    { pId: 432, productName: "Samsung Galaxy Note 7", productPrice: 699, productAvailable: true, imageUrl: "SamsungGalaxy_Gold.jpg",
        productDescription: "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory." },
    { pId: 433, productName: "Samsung Galaxy S6 Edge", productPrice: 630, productAvailable: true, imageUrl: "SamsungGalaxy_Gold.jpg",
        productDescription: "Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory." },
    { pId: 434, productName: "Nokia Lumia 640XL", productPrice: 223, productAvailable: false, imageUrl: "SamsungGalaxy_Gold.jpg",
        productDescription: "Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory." }
];
function getMobileDetails(mobileName, mobileId) {
}
for (var i = 0; i < 3; i++) {
    var mobileName = document.getElementById("pName" + i);
    var mobilePrice = document.getElementById("pPrice" + i);
    var availability = document.getElementById("pAvailable" + i);
    if (mobileName)
        mobileName.innerText += products[i].productName;
    if (mobilePrice)
        mobilePrice.innerText += products[i].productPrice;
    if (availability)
        availability.innerText += products[i].productAvailable ? "Available" : "Out Of Stock";
}
