const myNameIs = "Дамдин";
const profession = `Тестировщик космических летательных аппаратов`
const birthdate = new Date(1992, 1, 15);
let today = new Date();
let textAboutMe = `Привет! Меня зовут ${myNameIs}. Я ${profession}. Мой возраст - ${today.getFullYear() - birthdate.getFullYear()}.`;
console.log(textAboutMe);
alert(textAboutMe);