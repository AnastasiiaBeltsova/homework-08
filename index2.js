// Создать сущность автомобиля.Она должна содержать минимум 3 характеристики.
// А также иметь метод вывода на экран данных об этом автомобиле.
// И метод присвоение этого автомобиля владельцу(метод должен записать в автомобиль объект владельца)

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



