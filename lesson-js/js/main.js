'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
	constructor(container = '.products') {
		this.container = container;
		this.goods = [];
		this._getProducts()
			.then(data => {
				this.goods = data;
				this.render()
			});
	}

	_getProducts() {
		return fetch(`${API}/catalogData.json`)
			.then(text => text.json())
			.catch(error => {
				console.log(error);
			});

		// this.goods = [
		// 	{ id: 1, title: 'Notebook', image: "img/Notebook.png", price: 2000 },
		// 	{ id: 2, title: 'Mouse', image: "img/Mouse.png", price: 20 },
		// 	{ id: 3, title: 'Keyboard', image: "img/Keyboard.png", price: 200 },
		// 	{ id: 4, title: 'Gamepad', image: "img/Gamepad.png", price: 50 },
		// ]
	}

	sumProduct() {
		let sum = 0;
		this.goods.forEach(product => sum += product.price);
		return console.log(`Сумма товаров равна ${sum}`);
	}

	render() {
		const block = document.querySelector(this.container);
		for (let product of this.goods) {
			const item = new ProductItem(product);
			block.insertAdjacentHTML('beforeend', item.render());
		}
	}
}

class ProductItem {
	constructor(product, image = "https://via.placeholder.com/150") {
		this.title = product.product_name;
		this.price = product.price;
		this.id = product.id_product;
		this.image = image;
	}

	render() {
		return `<div class="product-item">
					<img src="${this.image}" alt="photo" class="img" width="150" height="150"></img>
					<h3 class="title">${this.title}</h3>
					<p class="txt">Стоимость: ${this.price}$</p>
					<button class="buy-btn">Купить</button>
				</div>`;
	}
}

let list = new ProductList();
list.sumProduct();

class Basket {
	constructor(container = '.basket') {
		this.container = container;
		this.goods = [];
		this.addGoods()
			.then(data => {
				this.goods = data.contents;
				this.render()
			});
	}

	addGoods() {
		return fetch(`${API}/getBasket.json`)
			.then(text => text.json())
			.catch(error => {
				console.log(error);
			});
	}

	// removeGoods() {}

	// changeGoods() {}

	render() {
		const block = document.querySelector(this.container);
		for (let product of this.goods) {
			const item = new ProductItem(product);
			block.insertAdjacentHTML('beforeend', item.render());
		}
	}
}

class ElBasket {
	constructor(product, image = "https://via.placeholder.com/50") {
		this.title = product.product_name;
		this.price = product.price;
		this.id = product.id_product;
		this.quantity = product.quantity;
		this.image = image;
	}

	render() {
		return `<div class="product-item">
					<img src="${this.image}" alt="photo" class="img" width="150" height="150"></img>
					<h3 class="title">${this.title}</h3>
					<p class="txt">Стоимость: ${this.price}$</p>
					<p class="quantity">Кол-во: ${this.quantity}</p>
					<button class="buy-btn">+</button>
				</div>`;
	};
}

document.querySelector('.btn-card').addEventListener('click', element => {
	document.querySelector('.basket').style.display = "block";
	let Basket = new Basket();
})