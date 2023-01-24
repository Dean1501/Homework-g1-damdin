import menu from "./menu.json" assert {type: 'json'};
import ingredientsPrice from "./ingredientsPrice.json" assert {type: 'json'};

// 1.
menu.forEach(function(element) {
    let costPrice = element.ingredients.reduce(function (sum, item){
        return sum + ingredientsPrice[item]
    }, 0)
    console.log(costPrice)
});

let costSum = menu.map(function (menuItem) {
    let costPrice = menuItem.ingredients.reduce(function (sum, item) {
        return sum + ingredientsPrice[item]
    }, 0)
    menuItem.cost = costPrice;
    return menuItem;
});
console.log(costSum)

