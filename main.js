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
// for (let i = 0; i < menu.length; i++) {
//     let cost = 0;
//     let ingredients = menu[i].ingredients;

//     for (let j = 0; j < ingredients.length; j++) {
//         let ingredientsName = ingredients[j];
//         let ingredientsCost = ingredientsPrice[ingredientsName];
//         cost += ingredientsCost;
//     };
//     menu[i].cost = cost;
//     alert(JSON.stringify(menu[i]));
// };