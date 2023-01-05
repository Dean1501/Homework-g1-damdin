let login = prompt(`Логин: `);
let password = prompt(`Пароль: `);

import users from `/scripts/listUsers.js`;
alert(JSON.stringify(users));