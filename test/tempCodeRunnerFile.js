function savings(){
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений', '');
        let percent = +prompt('Под какой процент', '');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

savings();