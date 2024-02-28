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
