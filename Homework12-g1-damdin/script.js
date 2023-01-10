//1. функция на наименьшее число
let x = +prompt('Введите любое число');

let y = +prompt('Введите еще число');

let result = minX(x, y);

alert(`Наименьшее из чисел - ${result}.`);



function minX(x, y) {
    if (x < y) {
        return (x);
    } else {
        return (y);
    };
};
//2. функция на вычисление профита блюда

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
        price: 50,
    },
    sandwich = {
        name: "sandwich",
        ingredients: ['bread', 'sausage', 'mayo',], 
        price: 60,
    }, buuza = {
        name: "buuza",
        ingredients: ['mutton', 'beef', 'pork', 'onion', 'salt', 'pepper', 'flour', 'water', 'salt',],
        price: 100,    
    },
];

for (let i = 0; i < menu.length; i++) {
    let cost = 0;
    let ingredients = menu[i].ingredients;

    menu[i].profit = profit(ingredients, ingredientsPrice, menu[i].price);
    alert(JSON.stringify(menu[i]));
};
function profit(ingredients, ingredientsPrice, price) {
    let cost = 0;
    for (let j = 0; j < ingredients.length; j++) {
        let ingredientsName = ingredients[j];
        let ingredientsCost = ingredientsPrice[ingredientsName];
        cost += ingredientsCost;
    };
    return price - cost;
};