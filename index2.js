function Car() {
    this.brand = prompt("Введите марку авто:");
    this.year = prompt("Ведите год машины:");
    this.color = prompt("Введите цвет авто:");

    this.sayAboutCar = function () {
        alert("Марка авто: " + this.brand + ", год: " + this.year + ", цвет: " + this.color);
    }

    this.setOwner = function (owner) {
        this.owner = owner;
    }
}

let car = new Car()
car.sayAboutCar();
car.setOwner({name: prompt('Введите имя:'), age: prompt('Введите возраст:')});

console.log(car);

