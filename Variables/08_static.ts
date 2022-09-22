class Cheq {
    static bankName : string = "Bank of India";
     accNo: number;
     customerName: string;
 }
 
 var objCheq = new Cheq();
 objCheq.accNo = 1234567;
 objCheq.customerName = "Codemind"
 console.log(Cheq.bankName);
 
 var objCheq2 = new Cheq();
 
 objCheq2.accNo = 7894561;
 objCheq2.customerName = 'Sevenmind';
 
 console.log(Cheq.bankName);
 
 var objCheq3 = new Cheq();
 
 objCheq3.accNo = 9785461;
 objCheq3.customerName = "Codeseeds";
 console.log(Cheq.bankName);
 