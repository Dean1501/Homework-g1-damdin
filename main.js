import users from "/listUsers.js";
alert(JSON.stringify(users));

let login = prompt(`Логин: `);
let password = prompt(`Пароль: `);

if (listUsers[login] !== undefined && listUsers[login] == password) {
        alert(`Вы вошли!`)
    } else if (listUsers[login] == undefined) {
        alert(`Такого пользователя не существует`);
    } else if (password != listUsers[login] || password == null || password == undefined) {
        alert(`Неправильный пароль`);
    };
    