import users from "/listUsers.json";

let login = prompt(`Логин: `);
let password = prompt(`Пароль: `);

if (users[login] !== undefined && users[login] == password) {
    alert(`Вы вошли!`)
} else if (users[login] == undefined) {
    alert(`Такого пользователя не существует`);
} else if (password != users[login] || password == null || password == undefined) {
    alert(`Неправильный пароль`);
};
