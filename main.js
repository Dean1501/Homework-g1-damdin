let ingredientsPrice = {
    "potato": 15,
    "bread": 3,
    "sausage": 15,
    "mayo": 3,
    "mutton": 15,
    "beef": 15,
    "pork": 15,
    "flour": 3,
    "onion": 3,
    "water": 1,
    "salt": 1,
    "pepper": 1
};

let frenchFries = {
    name: "frenchFries",
    ingredients: ["potato", "salt",],
};

let sandwich = {
    name: "sandwich",
    ingredients: ["bread", "sausage", "mayo",],
};

let buuza = {
    name: "buuza",
    ingredients: ["mutton", "beef", "pork", "onion", "salt", "pepper", "flour", "water", "salt",],
};

let menu = [frenchFries, sandwich, buuza];

let sebesFrenchFries = menu.frenchFries.ingredients.reduce(function (total, amount) {
    return total + amount;
}, 0);

let sebesSandwich = menu.sandwich.ingredients.reduce(function (total, amount) {
    return total + amount;
}, 0);

let sebesBuuza = menu.buuza.ingredients.reduce(function (total, amount) {
    return total + amount;
}, 0);

let sebesMenu = sebesFrenchFries + sebesSandwich + sebesBuuza;

alert(sebesMenu);