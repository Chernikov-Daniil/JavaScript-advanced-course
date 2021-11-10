'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
	constructor(container = '.products') {
		this.container = container;
		this.goods = [];
		this._getProducts()
			.then(data => {
				this.goods = data;
				this.render();
				this.sumProduct();
			});
	}

	_getProducts() {
		return fetch(`${API}/catalogData.json`)
			.then(text => text.json())
			.catch(error => {
				console.log(error);
			});
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

class Basket {
	constructor(container = '.basket') {
		this.container = container;
		this.goods = [];
		this._clickBasket();
		this._getBasket()
			.then(data => {
				this.goods = data.contents;
				this.render()
			});
	}

	_getBasket() {
		return fetch(`${API}/getBasket.json`)
			.then(data => data.json())
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const blockBasket = document.querySelector(this.container);
		for (let product of this.goods) {
			const item = new ElBasket(product);
			blockBasket.insertAdjacentHTML('beforeend', item.render());
		}
	}

	_clickBasket() {
		document.querySelector('.btn-card').addEventListener('click', element => {
			document.querySelector('.basket').classList.toggle('invisible');
		})
	}
}

class ElBasket {
	constructor(product, image = "https://via.placeholder.com/100x150") {
		this.title = product.product_name;
		this.price = product.price;
		this.id = product.id_product;
		this.quantity = product.quantity;
		this.image = image;
	}

	render() {
		return `<div class="basket-product-item">
					<img src="${this.image}" alt="photo" class="basket-img"></img>
					<div class='wrp-desc'>
						<h3 class="basket-title">${this.title}</h3>
						<p class="basket-txt">Стоимость: ${this.price}$</p>
						<p class="basket-quantity">Кол-во: ${this.quantity}</p>
					</div>
					<button class="basket-buy-btn">+</button>
				</div>`;
	};
}

let BasketList = new Basket();