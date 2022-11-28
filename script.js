let frenchFries = {
    name: 'Фришка',
    ingridients: ["Картофель", "Соль",],
    price: 100,
    discount: 15,
}
let sandwich = {
    name: "бутерброд",
    ingridients: ["хлеб", "колбаса", "майонез",],
    price: 50,
    discount: 15,
}
let buuza = {
    name: "Бууза",
    ingridients: ['Баранина', "Говядина", "Свинина", "Лук", "Соль", "Перец", "Мука", "Вода", "Соль",],
    price: 55,
    discount: 15,
}
let menu = [frenchFries, sandwich, buuza]
let frenchFriesDiscountPrice = frenchFries.price - (frenchFries.price * (frenchFries.discount / 100));
let sandwichDiscountPrice = sandwich.price - (sandwich.price * (sandwich.discount / 100));
let buuzaDiscountPrice = buuza.price - (buuza.price * (buuza.discount / 100));
alert(`Купи Бууза-комбо и получи фришку со скидкой всего за ${frenchFries.price - (frenchFries.price * (frenchFries.discount / 100))} p.`);
menu.pop(); // Удаление буузы из меню
buuza.ingridients.shift(`Баранина`); // Удаление баранины из рецепта бууз
alert(JSON.stringify(menu));
menu.unshift(buuza); // Добаление буузы в начало меню
alert(JSON.stringify(menu));
let value = `Стоимость бууза-комбо - ${frenchFriesDiscountPrice + sandwichDiscountPrice + buuzaDiscountPrice}`
alert(value);
menu.splice(1, 2); // Удаление всех позиций, кроме буузы
alert(JSON.stringify(menu));