'use strict';
// Добавляем все нужные мне переменные 
let 
	buttonCreateContact 	= document.querySelector('.btn-create-new-contact'),
	btnModalWindow 			= document.querySelector('.btn-modal-window'),
	overlayContact 			= document.querySelector('.overlay-contact'),
	overlayPhone 			= document.querySelector('.overlay-phone'),
	modalWindow 			= document.querySelector('.modal-window'),
	contentPage 			= document.querySelector('.content-page'),
	headerValue				= document.querySelector('.header-value'),
	btnSwitch				= document.querySelectorAll('.btn-switch'),
	btnNumber 				= document.querySelectorAll('.btn-number'),
	infoUser				= document.querySelectorAll('.info-user'),
	overlay 				= document.querySelector('.overlay-background'),
	search 					= document.querySelector('.search'),
	field 					= document.querySelector('.field-enter'),
	header 					= document.querySelector('.header'),
	number,
	user,
	info,
	span,
	img;

// Создаем общею функцию  
function generalFunctions() {
	buttonCreateContact.addEventListener('click', function() {
		// Делаю видимыми background & ModalWindow
		modalWindow.style.display 			= "block";
		overlay.style.display	  			= "block";

		// Добавляем элементы
		span 		= document.createElement('span');
		user 		= document.createElement('div');
		info 		= document.createElement('div');
		img 		= document.createElement('img');
		number 		= document.createElement('p');
		img.src		= "img/avatar.jpg"; // присваемаем каждому пользователю значок

		// добавляем классы в каждую переменную 
		user.classList.add('user');
		info.classList.add('info');
		img.classList.add('image');

		// добавляем в каждый родитель дочерний элемент
		contentPage.appendChild(user);
		user.appendChild(info);
		user.appendChild(number);
		info.appendChild(img);
		info.appendChild(span);
	});

	infoUser[0].addEventListener('input', function() {
		span.textContent  = infoUser[0].value; // Записоваем имя пользователь в лайф режиме
	});

	infoUser[1].addEventListener('input', function() {
		number.textContent  = infoUser[1].value; // Записоваем номер пользователь в лайф режиме
	});

	btnModalWindow.addEventListener('click', function() {
		// Скрываем background & modalWindow
		modalWindow.style.display = "none";
		overlay.style.display	  = "none";
	});

	// Перебераем массив с кнопками
	btnNumber.forEach(function(item) {
		item.addEventListener('click', function() { // добавляем каждой кнопке событие click
			headerValue.textContent +=  +item.textContent; // суммируем каждую нажатую кнопку в одну строку 
		});		
	});

	btnNumber[10].addEventListener('click', function() {
		headerValue.textContent =  null; // стераем всю строку 
	});

	btnSwitch[0].addEventListener('click', function() {
		overlayPhone.style.display 		= "flex"; // Делаем видемым окно для звонка
		overlayContact.style.display	= "none"; // Скрываем окно контактов
	});

	btnSwitch[1].addEventListener('click', function() {
		overlayContact.style.display	= "block"; // Делаем видемым окно контактов
		overlayPhone.style.display 		= "none"; // Скрываем окно для звонков
	});
};

generalFunctions(); // Вызываем функцию