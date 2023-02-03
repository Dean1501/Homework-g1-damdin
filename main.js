import menu from "./menu.json" assert {type: 'json'};
import ingredientsPrice from "./ingredientsPrice.json" assert {type: 'json'};

// 1.
console.log(`Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует "reduce"`);

menu.forEach(function (element) {
    let costPrice = element.ingredients.reduce(function (sum, item) {
        return sum + ingredientsPrice[item]
    }, 0)
    console.log(costPrice)
});

// 2. 

console.log(`Запишите в каждое блюдо себестоимость, используя "map" и функцию из первого задания.`)

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
console.log(`Отфильтруйте меню по какой-то предельной стоимости (например блюда стоимостью менее 100 рублей).`)

let lowCostMenu = menu.filter(menuItem => menuItem.price < 100);
console.log(lowCostMenu);

// 4.
console.log('4. Определите, есть ли в меню хоть одно вегетарианское блюдо, используя "some"'); 

const nonVeganIng = ["meat", "mutton", "beef", "pork", "sausage", ]

let vegetFood = menu.some(function (menuElem) {
    return menuElem.ingredients.every(function (ingredient) {
        return !nonVeganIng.includes(ingredient);
    });
});
console.log(vegetFood);

// 5.
console.log(`5. Определите, полностью ли у вас вегетарианское меню с помощью "every".`);

let vegetMenu = menu.every(function (menuElem) {
    return menuElem.ingredients.every(function (ingredient){
        return !nonVeganIng.includes(ingredient);
    })
})
console.log(vegetMenu);