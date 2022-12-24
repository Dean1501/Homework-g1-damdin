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
let ingredientsPrice = {
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

let menu = [
    frenchFries = {
        name: 'frenchFries',
        ingredients: ['potato', 'salt',],
    },
    sandwich = {
        name: "sandwich",
        ingredients: ['bread', 'sausage', 'mayo',],

    }, buuza = {
        name: "buuza",
        ingredients: ['mutton', 'beef', 'pork', 'onion', 'salt', 'pepper', 'flour', 'water', 'salt',],
    },
];

for (let i = 0; i < menu.length; i++) {
    let cost = 0;
    let ingredients = menu[i].ingredients;

    for (let j = 0; j < ingredients.length; j++) {
        let ingredientsName = ingredients[j];
        let ingredientsCost = ingredientsPrice[ingredientsName];
        cost += ingredientsCost;
    };
    menu[i].cost = cost;
    alert(JSON.stringify(menu[i]));
};