let passcode = "secret passcode";
class ProductDetail {
    private _productName: string;
    get productName(): string {
        return this._productName;
    }
    set productName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._productName= newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let p:ProductDetail = new ProductDetail();
p.productName = "Fridge";
if (p.productName) {
    console.log(p.productName);
}

