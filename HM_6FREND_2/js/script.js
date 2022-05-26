function Person(name) {
  this.name = name;
  this.age = promptGreatThenEqual18();
  this.gender = promptGender();
  function promptGender() {
    const input = prompt("Укажите свой пол (male или female)", "male");
    if (input !== "male" && input !== "female") {
      return promptGender();
    }
    return input;
  }
  this.getInfo = function () {
    console.log(`Имя ${this.name},Возраст ${this.age} Пол ${this.gender}`);
  };
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

function Avto(brand, type) {
  this.brand = brand;
  this.type = type;
  this.price = promtPrice();
  this.user = personCreator();

  function promtPrice() {
    const input = +prompt("Укажите цену", 1200);
    if (input <= 0 || isNaN(input)) {
      return promtPrice();
    }
    return input;
  }
  this.getInfo = function () {
    console.log(
      `Бренд авто ${this.brand},Тип автомобиля ${this.type} Цена авто ${this.price} `
    );
    console.log(
      `Информация о владельце: Имя ${this.user.name}; Возраст ${this.user.age}; Пол ${this.user.gender};`
    );
  };
}

function priceCreator() {
  const brand = promptRequired("Укажите марку авто");
  const type = promptRequired("Укажите тип автомобиля");
  return new Avto(brand, type);
}
let infoCar = priceCreator();
let infoPerson = Object.assign({}, infoCar.user);
