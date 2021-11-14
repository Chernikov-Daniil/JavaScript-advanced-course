'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		userSearch: '',
		catalogUrl: '/catalogData.json',
		basketUrl: '/getBasket.json',
		imgCatalog: 'https://via.placeholder.com/200x150',
		imgBasket: 'https://via.placeholder.com/100x150',
		products: [],
		filtered: [],
		basket: [],
		showCart: false,
	},
	methods: {
		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(error => {
					console.log(error)
				})
		},
		addProduct(item) {
			this.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result === 1) {
						let find = this.basket.find(el => el.id_product === item.id_product);
						if (find) {
							find.quantity++;
						} else {
							const newProduct = Object.assign({ quantity: 1 }, item);
							this.basket.push(newProduct);
						}
					}
				})
		},
		remove(item) {
			this.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result === 1) {
						if (item.quantity > 1) {
							item.quantity--;
						} else {
							this.basket.splice(this.basket.indexOf(item), 1);
						}
					}
				})
		},
		filter() {
			let regexp = RegExp(this.userSearch, 'i');
			this.filtered = this.products.filter(element => regexp.test(element.product_name));
		},
	},
	mounted() {
		this.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for (let el of data) {
					this.$data.products.push(el);
					this.$data.filtered.push(el);
				}
			});
		this.getJson(`getProducts.json`)
			.then(data => {
				for (let el of data) {
					this.products.push(el);
					this.filtered.push(el);
				}
			});
		this.getJson(`${API + this.basketUrl}`)
			.then(data => {
				for (let el of data.contents) {
					this.basket.push(el);
				}
			});
	}
})


// class ProductList {
// 	constructor(container = '.products') {
// 		this.container = container;
// 		this.goods = [];
// 		this._getProducts()
// 			.then(data => {
// 				this.goods = data;
// 				this.render();
// 				this.sumProduct();
// 			});
// 	}

// 	_getProducts() {
// 		return fetch(`${API}/catalogData.json`)
// 			.then(text => text.json())
// 			.catch(error => {
// 				console.log(error);
// 			});
// 	}

// 	sumProduct() {
// 		let sum = 0;
// 		this.goods.forEach(product => sum += product.price);
// 		return console.log(`Сумма товаров равна ${sum}`);
// 	}

// 	render() {
// 		const block = document.querySelector(this.container);
// 		for (let product of this.goods) {
// 			const item = new ProductItem(product);
// 			block.insertAdjacentHTML('beforeend', item.render());
// 		}
// 	}
// }

// class ProductItem {
// 	constructor(product, image = "https://via.placeholder.com/150") {
// 		this.title = product.product_name;
// 		this.price = product.price;
// 		this.id = product.id_product;
// 		this.image = image;
// 	}

// 	render() {
// 		return `<div class="product-item">
// 					<img src="${this.image}" alt="photo" class="img" width="150" height="150"></img>
// 					<h3 class="title">${this.title}</h3>
// 					<p class="txt">Стоимость: ${this.price}$</p>
// 					<button class="buy-btn">Купить</button>
// 				</div>`;
// 	}
// }

// let list = new ProductList();

// class Basket {
// 	constructor(container = '.basket') {
// 		this.container = container;
// 		this.goods = [];
// 		this._clickBasket();
// 		this._getBasket()
// 			.then(data => {
// 				this.goods = data.contents;
// 				this.render()
// 			});
// 	}

// 	_getBasket() {
// 		return fetch(`${API}/getBasket.json`)
// 			.then(data => data.json())
// 			.catch(error => {
// 				console.log(error);
// 			});
// 	}

// 	render() {
// 		const blockBasket = document.querySelector(this.container);
// 		for (let product of this.goods) {
// 			const item = new ElBasket(product);
// 			blockBasket.insertAdjacentHTML('beforeend', item.render());
// 		}
// 	}

// 	_clickBasket() {
// 		document.querySelector('.btn-card').addEventListener('click', element => {
// 			document.querySelector('.basket').classList.toggle('invisible');
// 		})
// 	}
// }

// class ElBasket {
// 	constructor(product, image = "https://via.placeholder.com/100x150") {
// 		this.title = product.product_name;
// 		this.price = product.price;
// 		this.id = product.id_product;
// 		this.quantity = product.quantity;
// 		this.image = image;
// 	}

// 	render() {
// 		return `<div class="basket-product-item">
// 					<img src="${this.image}" alt="photo" class="basket-img"></img>
// 					<div class='wrp-desc'>
// 						<h3 class="basket-title">${this.title}</h3>
// 						<p class="basket-txt">Стоимость: ${this.price}$</p>
// 						<p class="basket-quantity">Кол-во: ${this.quantity}</p>
// 					</div>
// 					<button class="basket-buy-btn">+</button>
// 				</div>`;
// 	};
// }

// let BasketList = new Basket();