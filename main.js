setTimeout(() => {
    console.log("start");
}, 7000);

fetch("menu.json", {
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((response) => response.json)
    .then((data) => data + 123);
    setTimeout(() => {
        console.log("start menu")
    }, 1000);
console.log(menu);