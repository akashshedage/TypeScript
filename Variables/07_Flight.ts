interface IFlight {
    to:string;
    from:string;
    flightNo:number;
    display():void;
}


class Flight implements IFlight {
    from: string;
    to: string;
    flightNo: number;

    constructor( from:string, to:string, flightNo:number) {
        this.to = to;
        this.from = from;
        this.flightNo = flightNo;
    }
    display(): void {
       //
    }

}

var objFlight = new Flight("Mum", "France", 1234567);
console.log(objFlight);
