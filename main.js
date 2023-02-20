setTimeout(() => {
    console.log("start");
}, 3000);

let menu;

fetch("menu.json", {
    headers: {
        "Content-type": "application/json",
        method: "GET",

    },
})
    .then((response) => response.json())
    .then((data) => {
        menu = data;
        console.log(menu)
    })
    .then((ingPrice) => {
        return fetch("ingredientsPrice.json")
            .then((res) => res.json())
            .then((data) => {
                ingPrice = data;
                console.log(ingPrice);
                return ingPrice;
            });
    })
    .then((ingPrice) => {
        return menu.map((element) => {
            let cost = element.ingredients.reduce((sum, item) => {
                return sum + ingPrice[item]
            }, 0)
            return cost;
        });
    })
    .then((costSumFunc) => {
        console.log(costSumFunc);
    });
    