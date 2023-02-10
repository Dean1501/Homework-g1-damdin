let menu = fetch("menu.json")
    .then((response) => response.json())
    .then((data) => {
        menu = data;
        console.log(menu)
    })
    .then(async (ingredientsPrice) => {
        const response = fetch("ingredientsPrice.json");
        ingredientsPrice = response.json();
        console.log(ingredientsPrice);
    })
    .then((costPrice) => {
        menu.forEach((element) => {
            let costPrice = element.ingredients.reduce((sum, item) => {
                return sum + ingredientsPrice[item]
            }, 0)
            console.log(costPrice);
        });
    })
    .then((costSumFunc) => {
        let costSum = menu.map((menuItem) => {
            let costPrice = menuItem.ingredients.reduce((sum, item) => {
                return sum + ingredientsPrice[item]
            }, 0);
            let newMenuItem = Object.assign({}, menuItem);
            newMenuItem.cost = costPrice;
            return newMenuItem;
        });
        console.log(costSum);
    });