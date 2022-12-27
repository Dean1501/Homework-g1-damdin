//1. функция на наименьшее число
function minX(x, y) {
    if (x < y) {
        return(x);
    } else {
        return(y);
    };
};
//`Число ${x} меньше чем число ${y}`

let x = prompt('Введите любое число');

let y = prompt('Введите еще число');

let result = minX(x,y);

alert(`Наименьшее из чисел - ${result}.`);

//2. функция на вычисление профита блюда
