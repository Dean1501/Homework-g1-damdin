import ingredientsPrice from "./ingredientsPrice.json" assert {type: 'json'};

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

let sebesMenu = menu.index.ingredients.reduce(function (sum) {
    console.log(sebesMenu)
})

alert(sebesMenu);