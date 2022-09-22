var Flight = /** @class */ (function () {
    function Flight(from, to, flightNo) {
        this.to = to;
        this.from = from;
        this.flightNo = flightNo;
    }
    Flight.prototype.display = function () {
        //
    };
    return Flight;
}());
var objFlight = new Flight("Mum", "France", 1234567);
console.log(objFlight);
