class Car {

    // Constructor
    constructor(model,color,engineCapacity,mileage,hasAirBags){
        this._model = model;
        this._color = color;
        this._engineCapacity = engineCapacity;
        this._mileage = mileage;
        this._hasAirBags = hasAirBags
    }

    // Getter  Setter Methods

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get engineCapacity() {
        return this._engineCapacity;
    }

    set engineCapacity(value) {
        this._engineCapacity = value;
    }

    get mileage() {
        return this._mileage;
    }

    set mileage(value) {
        this._mileage = value;
    }

    get hasAirBags() {
        return this._hasAirBags;
    }

    set hasAirBags(value) {
        this._hasAirBags = value;
    }

    // Specification
    specification(){
        let carSpec = `Model : ${this.model}
                       Color : ${this.color}
                       Engine Capacity : ${this.engineCapacity}
                       Mileage : ${this.mileage}
                       Has Air Bags : ${this.hasAirBags}`;
        return carSpec;
    }
}
// Create a Car Object
let car = new Car('BMW','White','4000CC','10kmpl',true);
let specOfCar = car.specification();
console.log(specOfCar);



