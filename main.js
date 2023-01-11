let frenchFries = [
    ingredients = [
        { name: "potato", sebes: 15, },
        { name: "salt", sebes: 1, },
    ],
    price = 50,
];

let sandwich = [
    ingredients = [
        { name: "bread", sebes: 3, },
        { name: "sausage", sebes: 15, },
        { name: "mayo", sebes: 3, }
    ],
    price = 60,
];

let buuza = [
    ingredients = [
        { name: "mutton", sebes: 15, },
        { name: "beef", sebes: 15, },
        { name: "pork", sebes: 15, },
        { name: "onion", sebes: 3, },
        { name: "salt", sebes: 1, },
        { name: "pepper", sebes: 1, },
        { name: "flour", sebes: 3, },
        { name: "water", sebes: 1, },
        { name: "salt", sebes: 1, }
    ],
    price = 100,
];

let menu = [frenchFries, sandwich, buuza];

let sebesFrenchFries = frenchFries.ingredients.reduce((acc, ingredient) => {
    let sebesPosition = acc + ingredient.sebes;
    return sebesPosition;
}, 0);

alert(sebesFrenchFries);

let sebesSandwich = sandwich.ingredients.reduce((acc, ingredient) => {
    let sebesPosition = acc + ingredient.sebes;
    return sebesPosition;
}, 0);

alert(sebesSandwich);

let sebesBuuza = buuza.ingredients.reduce((acc, ingredient) => {
    let sebesPosition = acc + ingredient.sebes;
    return sebesPosition;
}, 0);

alert(sebesBuuza);