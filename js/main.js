'use strict';

/**
 * Массив товаров
 */
const products = [
	{id:1, title: 'Notebook', image: "img/Notebook.png", price: 2000},
	{id:2, title: 'Mouse', image: "img/Mouse.png", price: 20},
	{id:3, title: 'Keyboard', image: "img/Keyboard.png", price: 200},
	{id:4, title: 'Gamepad', image: "img/Gamepad.png", price: 50},
];

/**
 * Функция для формирования верстки каждого товара
 * @param {object} product - карточка товара
 */
const renderProducts = (product) => 
	`<div class="product-item">
		<img src="${product.image}" alt="photo" class="img" width="100" height="50"></img>
		<h3 class="title">${product.title}</h3>
		<p class="txt">Стоимость: ${product.price}$</p>
		<button class="buy-btn">Купить</button>
	</div>`;

/**
 * Вставка верстки товаров на страницу
 * @param {Array} list - массив товаров
 */
const renderPage = list => {
	const productList = list.map(item => renderProducts(item));
	console.log(productList);
	document.querySelector(".products").innerHTML = productList.join('');
};

renderPage(products);