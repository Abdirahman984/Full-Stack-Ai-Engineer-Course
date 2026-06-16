let car = {
    name: "toyota",
    model: "v.8",
    made: "china",
    year: 2010,
    start: function (){
        console.log("The car has started", this.name)
    }
}

console.log(car)

console.log(car.start())
