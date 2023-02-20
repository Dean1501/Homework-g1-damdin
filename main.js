setTimeout(() => {
    console.log("start");
}, 3000);

let menu;
let ingPrice;

fetch("menu.json")
    .then((response) => response.json())
    .then((data) => {
        menu = data;
        console.log(menu);
        return fetch("ingredientsPrice.json")
    })
    .then((res) => res.json())
    .then((data) => {
        ingPrice = data;
        console.log(ingPrice);
        return ingPrice;
    })
    .then((ingPrice) => {
        let result = menu.map((element) => {
            let cost = element.ingredients.reduce((sum, item) => {
                return sum + ingPrice[item]
            }, 0)
            return cost;
        });
        console.log(result);
    })
