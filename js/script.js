'use strict';
let budjet = document.querySelector('.budget-value'),
	dayBudjetValue = document.querySelector('.daybudget-value'),

	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
	
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value'),

	expensesItem = document.querySelectorAll('.expenses-item'),
	confirm = document.querySelectorAll('button'),
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	optionalExpenses = document.querySelector('.optionalexpenses'),

	savings = document.querySelector('#savings'),
	sum = document.querySelector('#sum'),
	percent = document.querySelector('#percent'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),

	chooseIncome = document.querySelector('.choose-income'),
	budget = document.querySelector('.budjet'),
	money,
	time;	

let appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: {},
	savings: false,
	allFunctions: () => {
		confirm[3].addEventListener('click', function() {
			let time = prompt("Введите дату в формате YYYY-MM-DD");

			if (time != "") {
				yearValue.value 	= new Date(Date.parse(time)).getFullYear();
				monthValue.value 	= new Date(Date.parse(time)).getMonth() + 1;
				dayValue.value 	= new Date(Date.parse(time)).getDay() - 1;	
			} else if (time == "") {
				for (let i = 0; i < 1000000; i++) {
					if (time != "") {
						yearValue.value 	= new Date(Date.parse(time)).getFullYear();
						monthValue.value 	= new Date(Date.parse(time)).getMonth() + 1;
						dayValue.value 	= new Date(Date.parse(time)).getDay() - 1;
						break;
					}
					time = prompt("Введите дату в формате YYYY-MM-DD");
				}
			}

			confirm[0].addEventListener('click', function() {
				for (let i = 0; i < expensesItem.length; i++) {
					let a = expensesItem[i].value,
						b = +expensesItem[++i].value;

					sum += +b;

					expensesValue.textContent = sum;
				}
			});
			
			confirm[1].addEventListener('click', function() {
				for (let i = 0; i < optionalExpensesItem.length; i++) {
					let a = optionalExpensesItem[i].value;

					optionalExpensesValue.textContent += " " + a;
				}
			});

			confirm[2].addEventListener('click', function() {
				for (let i = 0; i < 1; i++) {
					let a = +prompt("Ваша З/П в месяц?");

					if (a >= 1) {
						budjet.textContent = a;
						dayBudjetValue.textContent = a / 30;
						levelValue.textContent = "Низкий уровень достатка";
					} else if (a > 1000 && a < 5000) {
						budjet.textContent = a;
						dayBudjetValue.textContent = a / 30;
						levelValue.textContent = "Средний уровень достатка";
					} else if (a > 5000) {
						budjet.textContent = a;
						dayBudjetValue.textContent = a / 30;
						levelValue.textContent = "Высокий уровень достатка";
					} else if (a < 0 || a == null || a == "") {
						for (let i = 0; i < 100000; i++) {
							if (a > 0) {						
								if (a >= 1) {
									budjet.textContent = a;
									dayBudjetValue.textContent = a / 30;
									levelValue.textContent = "Низкий уровень достатка";
								} else if (a > 1000 && a < 5000) {
									budjet.textContent = a;
									dayBudjetValue.textContent = a / 30;
									levelValue.textContent = "Средний уровень достатка";
								} else if (a > 5000) {
									budjet.textContent = a;
									dayBudjetValue.textContent = a / 30;
									levelValue.textContent = "Высокий уровень достатка";
								};

								break;
							};

							a = +prompt("Ваша З/П в месяц?");
						}
					}
				}	
			});

			chooseIncome.addEventListener('input', function() {
				incomeValue.textContent = chooseIncome.value;
			});

			savings.addEventListener('click', function() {
				if (appData.savings == false) {
					appData.savings = true;
					console.log(true)
				} else if (appData.savings == true) {
					appData.savings = false;
					console.log(false)
				}
			});

			chooseSum.addEventListener('input', function() {
				if (appData.savings == true) {
					let a = chooseSum.value,
						b = choosePercent.value;

					monthSavingsValue.textContent = parseInt(a / 12 / 100 * b);
					yearSavingsValue.textContent = parseInt(a / 100 * b);
				}
			});

			choosePercent.addEventListener('input', function() {
				if (appData.savings == true) {
					let a = chooseSum.value,
						b = choosePercent.value;

					monthSavingsValue.textContent = parseInt(a / 12 / 100 * b);
					yearSavingsValue.textContent = parseInt(a / 100 * b);
				}
			});
		});

	}
};
appData.allFunctions();