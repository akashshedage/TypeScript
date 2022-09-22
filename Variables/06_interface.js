var product = {
    id: 123,
    name: "Iphone",
    description: "Its good phone",
    // price: 25000
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
console.log(product);
function show() {
    console.log(10 + 20);
}
show();
