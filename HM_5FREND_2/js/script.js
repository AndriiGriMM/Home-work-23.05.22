function Person(userName, age, sex) {
  (this.userName = userName),
    (this.age = age),
    (this.sex = sex),
    (this.getInfo = function getInfo() {
      console.log(this);
    });
  this.setInfo = function setInfo() {
    (this.userName = prompt("userName")),
      (this.age = +prompt("age")),
      (this.sex = prompt("Укажите Ваш пол в формате Муж или Жен"));
  };
  this.checkInfo = function checkInfo() {
    if (this.age < 18 || isNaN(this.age)) {
      return (this.age = +prompt(
        "Возможно вы ошиблись в возрасте или ввели не числовое значение.попробуйте снова"
      ));
    } else if (this.sex !== "Муж" && this.sex !== "Жен") {
      return (this.sex = prompt(
        "Возможно вы указали не верную информацию касательно вашего пола.Попробуйте снова"
      ));
    }
  };
}
let infoPerson = new Person();

function AvtoCar(brand, engine, patrol) {
  (this.brand = brand),
    (this.engine = engine),
    (this.patrol = patrol),
    (this.getInfo = function getInfo() {
      console.log(this);
    });
  this.setInfo = function setInfo() {
    (this.brand = prompt("Марка авто")),
      (this.engine = +prompt("Объем двигателя")),
      (this.patrol = prompt("Вид топлива"));
  };
  this.ownerInfo = infoPerson;
}
let AvtoInfo = new AvtoCar();
