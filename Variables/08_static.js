var Cheq = /** @class */ (function () {
    function Cheq() {
    }
    Cheq.bankName = "Bank Of India";
    return Cheq;
}());
var objCheq = new Cheq();
objCheq.accNo = 1234567;
objCheq.customerName = "Codemind";
console.log(Cheq.bankName);
var objCheq2 = new Cheq();
objCheq.accNo = 45678932;
objCheq.customerName = "Sevenmind";
console.log(Cheq.bankName);
var objCheq3 = new Cheq();
objCheq.accNo = 98745612;
objCheq.customerName = "Codeseed";
console.log(Cheq.bankName);
