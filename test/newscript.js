let money, date;

function start() {
    money = +prompt('Какой ваш бюджет', '');
    date = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Какой ваш бюджет', '');

    }
}
start();

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: date,
    savings: true,
    chooseExpenses: function () {
        for (i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            b = prompt('Во сколько это обойдется?', '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('okay')
                appData.expenses[a] = b;
            } else {
                appData.expenses[a] = 0;
            }
        };
    },
    detectDayBunget: function () {
        appData.daylyMoney = (appData.budget / 30).toFixed(2);
        alert('Ваш дневной бюджет = ' + appData.daylyMoney + 'руб');
        return appData.daylyMoney;
    },
    detectLevel: function () {
        if (appData.daylyMoney < 100) {
            console.log('Минимальный уровень');
        } else if (appData.daylyMoney >= 100 && appData.daylyMoney <= 500) {
            console.log('Средний уровень достатка');
        } else if (appData.daylyMoney > 500) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('наверное что-то не так');
        };
    },
    savings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений', '');
            let percent = +prompt('Под какой процент', '');
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptionalExpenses: function () {
        for (i = 1; i < 4; i++) {
            appData.optionalExpenses[i] = +prompt('Статья необязательных расходов?', '');
        }
    },
    chooseIncome: function () {
        let items;
        items = prompt('Что принесет дополнительный доход (перечислите через запятую', '');
        while (isNaN(items) || items == '' || items == null){
            items = prompt('Что принесет дополнительный доход (перечислите через запятую', '');
        };
            appData.income = items.split(', ');
            appData.income.push(prompt('more???', ''));
            appData.income.sort();
            alert('Вы записали   ' + appData.income.join(';'));
        }
    };

appData.chooseIncome();

console.log(appData);

let arr = [1,4,9,2,5];

arr.forEach(element => {
    console.log('Способы дополнительного заработка ' + element);
});


for (let key in options){
    console.log('Наша программа включает в себя данные' + key + 'с значением' + options[key]);
}
console.log(appData.keys(options).length);
