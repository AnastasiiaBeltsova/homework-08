function Person() {
    this.name = prompt('Введите свое имя:');
    this.age = prompt('Введите свой возраст');

    this.getInfo = function () {
        alert("Ваше имя: " + this.name + ", вам: " + this.age);
    }
}

let user = new Person();
user.getInfo();
