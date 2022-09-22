interface IProduct {
    id: number;
    name: string;
    description: string;
    price?: number; // ? is used for optional
    display():void;
}


var product : IProduct = {
    id: 123,
    name: "Iphone",
    description: "Its good phone",
    // price: 25000
    display():void {
        console.log(this.id + " " + this.name);
        
    }
}

console.log(product);


function show (): void{
    console.log(10 + 20);
}
show();