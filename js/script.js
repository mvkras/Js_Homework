'use strict';

 let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате: YYYY-MM-DD', '');



    let addData = {
        allMoney: money,
        timeData: time,
        expenses : {},
        optionalExpenses: {},
        income : [],
        savings: false
    };
 

let answer1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
answer2 = prompt('Во сколько обойдется?', ''),
answer3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
answer4 = prompt('Во сколько обойдется?', '');

addData.expenses.answer1 = answer2;
addData.expenses.answer3 = answer4;

alert(addData.allMoney / 30); 






/* Вопросы к заданию:
1. Сколько типов данных в Js: 8:
num, string, char, boolean, null, underfined, Symbol,object;
2. Как вывести информацию на консоль? С помощью команды console.log(); 
3. Какая функция операторов Или и И - это логические операторы*/

