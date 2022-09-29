// Создать сущность человека, который будет содержать свойства “имя” и “возраст”.
// А также иметь метод вывода данных объекта


function Person() {
    this.name = prompt('Введите свое имя:');
    this.age = prompt('Введите свой возраст');

    this.getInfo = function () {
        alert("Ваше имя: " + this.name + ", вам: " + this.age);
    }
}

let user = new Person();
user.getInfo();