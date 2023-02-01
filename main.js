import menu from "./menu.json" assert {type: 'json'};
import ingredientsPrice from "./ingredientsPrice.json" assert {type: 'json'};

// 1.
menu.forEach(function (element) {
    let costPrice = element.ingredients.reduce(function (sum, item) {
        return sum + ingredientsPrice[item]
    }, 0)
    console.log(costPrice)
});

// 2. 

let costSum = menu.map(function (menuItem) {
    let costPrice = menuItem.ingredients.reduce(function (sum, item) {
        return sum + ingredientsPrice[item]
    }, 0);
    let newMenuItem = Object.assign({}, menuItem);
    newMenuItem.cost = costPrice;
    return newMenuItem;
});
console.log(costSum);

// 3. 

const nonVeganIng = ["meat", "mutton", "beef", "pork", "sausage", ]

let vegetFood = menu.some(function (menuElem) {
    return menuElem.ingredients.every(function (ingredient) {
        return !nonVeganIng.includes(ingredient);
    });
});
console.log(vegetFood);