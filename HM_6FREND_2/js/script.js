function Person(name) {
  this.name = name;
  this.age = promptGreatThenEqual18();
  this.gender = promptGender();
  this.getInfo = function () {
    console.log(`Имя ${this.name},Возраст ${this.age} Пол ${this.gender}`);
  };
  function promptGender() {
    const input = prompt("Укажите свой пол (male или female)", "male");
    if (input !== "male" && input !== "female") {
      return promptGender();
    }
    return input;
  }
  function promptGreatThenEqual18() {
    const input = +prompt("Укажите возраст (больше 18-ти)", 22);
    if (input < 18 || isNaN(input)) {
      return promptGreatThenEqual18();
    }
    return input;
  }
}

function promptRequired(text) {
  const input = prompt(text);
  if (!input) {
    return promptRequired(text);
  }
  return input;
}
function personCreator() {
  const name = promptRequired("Укажите имя");
  return new Person(name);
}
let infoPerson = personCreator();

function Avto(brand, type) {
  this.brand = brand;
  this.type = type;
  this.price = promtPrice();
  this.user = undefined;
  this.setUser = function (userObject) {
    this.user = userObject;
  };
  this.getInfo = function () {
    console.log(
      `Бренд авто ${this.brand},Тип автомобиля ${this.type} Цена авто ${this.price} `
    );
    console.log(
      `Информация о владельце: Имя: ${this.user.name}; Позраст:  ${this.user.age}; Пол:  ${this.user.gender};`
    );
  };
  function promtPrice() {
    const input = +prompt("Укажите цену", 1200);
    if (input <= 0 || isNaN(input)) {
      return promtPrice();
    }
    return input;
  }
}

function avtoCreator() {
  const brand = promptRequired("Укажите марку авто");
  const type = promptRequired("Укажите тип автомобиля");
  return new Avto(brand, type);
}
let infoCar = avtoCreator();
infoCar.setUser(infoPerson);
