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
let infoPerson = personCreator();

function Avto(brand, type, user) {
  this.brand = brand;
  this.type = type;
  this.price = promtPrice();
  this.user = setUser(infoPerson);

  function setUser(infoPerson) {
    this.user = `Имя ${infoPerson.name}, Возраст ${infoPerson.age}, Пол ${infoPerson.gender}`;
    return this.user;
  }

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
    console.log(`Информация о владельце: ${this.user}.`);
  };
}

function priceCreator() {
  const brand = promptRequired("Укажите марку авто");
  const type = promptRequired("Укажите тип автомобиля");
  return new Avto(brand, type);
}
let infoCar = priceCreator();
