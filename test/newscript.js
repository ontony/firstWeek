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
    timeData: date,
    expenses: {

    },
    optionalExpenses: {

    },
    savings: true,
    income: [],

};


function chooseExpenses() {
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
}
chooseExpenses()

function detectDayBunget() {
    appData.daylyMoney = (appData.budget / 30).toFixed(2);
    alert('Ваш дневной бюджет = ' + appData.daylyMoney + 'руб');
    return appData.daylyMoney;
}
detectDayBunget()


function detectLevel(level) {
    if (level < 100) {
        console.log('Минимальный уровень');
    } else if (level >= 100 && level <= 500) {
        console.log('Средний уровень достатка');
    } else if (level > 500) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('наверное что-то не так');
    }
}
detectLevel(appData.daylyMoney)


function savings(){
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений', '');
        let percent = +prompt('Под какой процент', '');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

savings();

function choodeOptionalExpenses (){
    for (i = 1; i < 4; i++){
    appData.optionalExpenses[i] = +prompt('Статья необязательных расходов?', '');
    }
};

choodeOptionalExpenses();

console.log(appData);