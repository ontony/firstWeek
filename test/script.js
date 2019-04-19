var money = prompt('Какой ваш бюджет на месяц', '');

var time = prompt('Ssrlbnt дату в формате YYYY-MM-DD', '');

var appData = {};

appData.budget = money;
appData.timeData = time;


var expenses = {};
var optionalExpenses = {};

var what = prompt('Введите обязательную статью расходов в этом месяце?', '');
var cost = prompt('Во сколько это обойдется?', '');

expenses.forWhat = what;
expenses.costWat = cost;


console.log(expenses);

var oneDay = (appData.budget - expenses.costWat)/30;

console.log(oneDay);

alert('Ваш дневной бюджет не должен превышать '+ oneDay + ' рублей');