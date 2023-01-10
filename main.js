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
    price: 50,
};

let sandwich = {
    name: "sandwich",
    ingredients: ["bread", "sausage", "mayo",],
    price: 60,
};

let buuza = {
    name: "buuza",
    ingredients: ["mutton", "beef", "pork", "onion", "salt", "pepper", "flour", "water", "salt",],
    price: 100,
};

let menu = [frenchFries, sandwich, buuza];



for (let i = 0; i < menu.length; i++) {

    let sebesMenu = 0;

    let ingredients = menu[i].ingredients;

    menu[i].profit = profit(ingredients, ingredientsPrice);
};

function profit(ingredients, ingredientsPrice) {
    for (let j = 0; j < ingredients.length; j++) {
    let ingredientsName = ingredients[j];
    let ingredientsCost = ingredientsPrice[ingredientsName];
    let sebesPosition = ingredientsCost.reduce(function (total, amount) {
        return total + amount;
    }, 0);

    alert(sebesPosition);
}};