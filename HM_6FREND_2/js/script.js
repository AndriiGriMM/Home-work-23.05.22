function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.getInfo = function () {
    console.log(`Имя ${this.name},Возраст ${this.age} Пол ${this.gender}`);
  };
}

function promptRequired(text) {
  const input = prompt(text);
  if (!input) {
    return promptRequired(text);
  }
  return input;
}

function promptGreatThenEqual18(text) {
  const input = +prompt(text);
  if (input < 18 || isNaN(input)) {
    return promptGreatThenEqual18(text);
  }
  return input;
}
function promptGender(text) {
  const input = prompt(text);
  if (input !== "male" && input !== "female") {
    return promptGender(text);
  }
  return input;
}
function personCreator() {
  const name = promptRequired("Укажите имя");
  const age = promptGreatThenEqual18("Укажите возраст (больше 18-ти)");
  const gender = promptGender("Укажите свой пол (male или female)");
  return new Person(name, age, gender);
}
let infoPerson = personCreator();

function Avto(brand, type, price) {
  this.brand = brand,
    this.type = type,
    this.price = price,
    this.user = infoPerson;
  this.getInfo = function () {
    console.log(
      `Бренд авто ${this.brand},Тип автомобиля ${this.type} Цена авто ${this.price} `
    );
    console.log(
      `Информация о владельце: Имя ${this.user.name}; Возраст ${this.user.age}; Пол ${this.user.gender};`
    );
  };
}
function promtPrice(price) {
  const input = +prompt(price, 1200);
  if (input <= 0 || isNaN(input)) {
    return promtPrice(price);
  }
  return input;
}
function priceCreator() {
  const brand = promptRequired("Укажите марку авто");
  const type = promptRequired("Укажите тип автомобиля");
  const price = promtPrice("Укажите цену");
  return new Avto(brand, type, price);
}
let infoCar = priceCreator();
