import ingredientsPrice from "./ingredientsPrice.json" assert {type: 'json'};

let menu = [
    frenchFries = {
        name: "frenchFries",
        ingredients: ["potato", "salt",],
    },
    sandwich = {
        name: "sandwich",
        ingredients: ["bread", "sausage", "mayo",],

    },
    buuza = {
        name: "buuza",
        ingredients: ["mutton", "beef", "pork", "onion", "salt", "pepper", "flour", "water", "salt",],
    },
];

let sebesMenu = menu.index.ingredients.reduce(function (sum) {
    console.log(sebesMenu)
})

alert(sebesMenu);