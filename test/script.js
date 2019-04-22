
// WHILE
// i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//     b = prompt('Во сколько это обойдется?', '');
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('okay')
//         appData.expenses[a] = b;
//     } else {
//         appData.expenses[a] = 0;
//     }
//     i++;
// }

// DO WHILE
// i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//     b = prompt('Во сколько это обойдется?', '');
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('okay')
//         appData.expenses[a] = b;

//     } else {
//         appData.expenses[a] = 0;
//     }}
//     while (i < 2);



var money = +prompt('Какой ваш бюджет', '');
var date = prompt('Введите дату в формате YYYY-MM-DD', '');


var appData = {
    budget: money,
    timeData: date,
    expenses: {

    },
    optionalExpenses: {

    }

};



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





console.log(appData);

appData.daylyMoney = appData.budget / 30;

alert('Ваш дневной бюджет = ' + appData.daylyMoney + 'руб');


if(appData.daylyMoney < 100){
    console.log('Минимальный уровень');
} else if (appData.daylyMoney >= 100 && appData.daylyMoney <= 500){
    console.log('Средний уровень достатка');
} else if (appData.daylyMoney > 500) {
    console.log('Высокий уровень достатка');
} else {
    console.log('наверное что-то не так');
}