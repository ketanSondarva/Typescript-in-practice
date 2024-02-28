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



