
var appData = {
    expenses: {
    },
    optionalExpenses: {
    },
    savings: false,
    income: [],
};

var money = prompt('Какой ваш бюджет', '');
var date = prompt('Введите дату в формате YYYY-MM-DD', '');

appData.timeData = date;
appData.budget = money;

appData.expenses[prompt('Причина 1', '')] = prompt('Цена 1', '');
appData.expenses[prompt('Причина 2', '')] = prompt('Цена 2', '');


var result = (parseInt(appData.budget, 10))/30;

console.log(appData);

alert('Ваш дневной бюджет = ' + result + 'руб');