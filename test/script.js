

var money = prompt('Какой ваш бюджет', '');
var date = prompt('Введите дату в формате YYYY-MM-DD', '');


var appData = {
    budget: money,
    timeData: date,
    expenses: {
        costOne: '',
        reasonOne: '',
    },
    optionalExpenses: {
        costTwo: '',
        reasonTwo: '',
    }

};


appData.optionalExpenses.costOne = prompt('Цена 1', '');
appData.optionalExpenses.reasonOne = prompt('Причина 1', '');
appData.optionalExpenses.costTwo = prompt('Цена 2', '');
appData.optionalExpenses.reasonTwo = prompt('Причина 2', '');

var result = (parseInt(appData.optionalExpenses.costOne, 10) + 
    parseInt(appData.optionalExpenses.costTwo, 10) + parseInt(appData.budget, 10))/30;

alert('Ваш дневной бюджет = ' + result + 'руб');