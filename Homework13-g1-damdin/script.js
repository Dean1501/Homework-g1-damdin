let listUsers = {
    admin: `root`,
    user: `123`,
    Damdin: `150192`,
};

let login = prompt(`Логин: `);
let password = prompt(`Пароль: `);

if (listUsers[login] !== undefined && listUsers[login] == password) {
    alert(`Вы вошли!`)
} else if (listUsers[login] == undefined) {
    alert(`Такого пользователя не существует`);
} else if (password != listUsers[login] || password == null || password == undefined) {
    alert(`Неправильный пароль`);
};
