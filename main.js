setTimeout(() => {
    console.log("start");
}, 7000);

let menu = fetch("menu.json")
    .then((response) => response.json)
    .then((data) => console.log(data));
    setTimeout(() => {
        console.log("start menu")
    }, 1000);

console.log(menu);