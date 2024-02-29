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


const products: any [] = [
    {pId:432,productName:"Samsung Galaxy Note 7",productPrice:699,productAvailable:true,imageUrl:"SamsungGalaxy_Gold.jpg",
    productDescription:"Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."},

    {pId:433,productName:"Samsung Galaxy S6 Edge",productPrice:630,productAvailable:true,imageUrl:"SamsungGalaxy_Gold.jpg",
    productDescription:"Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory."},

    {pId:434,productName:"Nokia Lumia 640XL",productPrice:223,productAvailable:false,imageUrl:"SamsungGalaxy_Gold.jpg",
    productDescription:"Nokia Lumia 640XL is a stylish mobile you can ever have. It has 64GB memory."}
];


for(let i = 0; i < 3; i++) {
    const mobileName = document.getElementById("pName"+i);
    const mobilePrice = document.getElementById("pPrice"+i);
    const availability = document.getElementById("pAvailable"+i);

    if(mobileName) mobileName.innerText += products[i].productName;
    if(mobilePrice) mobilePrice.innerText += products[i].productPrice;
    if(availability) availability.innerText += products[i].productAvailable ? "Available" : "Out Of Stock";
}


function getMobileDetails(mobileName: string, mobileId: number): any {

}
