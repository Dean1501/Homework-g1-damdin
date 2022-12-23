//1. четные числа:
for (let i = 2; i <= 10; i += 2) {

    do {
        alert(i);
        i += 2;
    }
    while (i <= 10);

};
//2. прерывание на пятом шаге
let five = 1;
while (true) {
    alert(five);
    if (five === 5) {
        break;
    }
    five++;
};

//3. массив блюд как в 8 задании
let potato = {
    name: 'Картофель',
    qty: 100,
    price: 15,
    sebes: 5,
};
let bread = {
    name: 'хлеб',
    qty: 10,
    price: 3,
    sebes: 1,
};
let sausage = {
    name: 'колбаса',
    qty: 10,
    price: 15,
    sebes: 5,
};
let mayo = {
    name: 'майонез',
    qty: 1,
    price: 3,
    sebes: 1,
};
let mutton = {
    name: 'баранина',
    qty: 10,
    price: 15,
    sebes: 5
};
let beef = {
    name: 'говядина',
    qty: 10,
    price: 15,
    sebes: 5,
};
let pork = {
    name: 'свинина',
    qty: 10,
    price: 15,
    sebes: 5,
};
let flour = {
    name: 'мука',
    qty: 10,
    price: 3,
    sebes: 1,
};
let onion = {
    name: 'лук',
    qty: 10,
    price: 3,
    sebes: 1,
};
let water = {
    name: 'вода',
    qty: 10,
    price: 1,
    sebes: 1,
};
let salt = {
    name: 'соль',
    qty: 1,
    price: 1,
    sebes: 1,
};
let pepper = {
    name: 'перец',
    qty: 1,
    price: 1,
    sebes: 1,
};
let ingredientprice = {
    potato: 15,
    bread: 3,
    sausage: 15,
    mayo: 3,
    mutton: 15,
    beef: 15,
    pork: 15,
    flour: 3,
    onion: 3,
    water: 1,
    salt: 1,
    pepper: 1,
};

let frenchFries = {
    name: 'Фришка',
    ingridients: ["potato", "salt",],
    price: 100,
    discount: 15,
};
let sandwich = {
    name: "Бутерброд",
    ingridients: ["bread", "sausage", "mayo",],
    price: 50,
    discount: 15,
};
let buuza = {
    name: "Бууза",
    ingridients: ["mutton", "beef", "pork", "onion", "salt", "pepper", "flour", "water", "salt",],
    price: 55,
    discount: 15,
};

let menu = { frenchFries, sandwich, buuza, };

let wholeprice = 0;
for (let i = 0; i < menu.length; i++) {
    let price = 0;
    const ingredients = menu[i].ingredients;

    for (let j = 0; j < ingredients.length; j++) {
        let ingredientName = ingredients[j];
        let ingredientprice = ingredientsprice[ingredientName];
        price += ingredientprice;
    };
    menu[i].price = price;
    alert(JSON.stringify(menu[i]));
};