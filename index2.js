function Car() {
    this.brand = prompt("Введите марку авто:");
    this.year = prompt("Ведите год машины:");
    this.color = prompt("Введите цвет авто:");

    this.sayAboutCar = function () {
        alert("Марка авто: " + this.brand + ", год: " + this.year + ", цвет: " + this.color);
    }

    this.getOwner = function () {
        this.owner = prompt("Введите свое имя:");
        alert("Владелец " + this.brand + " - " + this.owner);
    }
}

let car = new Car()
car.sayAboutCar();
car.getOwner();



