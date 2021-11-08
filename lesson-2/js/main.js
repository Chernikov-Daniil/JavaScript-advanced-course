'use strict';

class ProductList{
	constructor(container='.products') {
		this.container = container;
		this.goods = [];
		this._fetchProducts();
		this.render();
	}

	_fetchProducts() {
		this.goods = [
			{id:1, title: 'Notebook', image: "img/Notebook.png", price: 2000},
			{id:2, title: 'Mouse', image: "img/Mouse.png", price: 20},
			{id:3, title: 'Keyboard', image: "img/Keyboard.png", price: 200},
			{id:4, title: 'Gamepad', image: "img/Gamepad.png", price: 50},
		]
	}

	sumProduct() {
		let sum = 0;
		this.goods.forEach(product => sum += product.price);
		return alert(`Сумма товаров равна ${sum}`);
	}

	render() {
		const block = document.querySelector(this.container);
		for(let product of this.goods){
			const item = new ProductItem(product);
			block.insertAdjacentHTML('beforeend', item.render());
		}
	}
}

class ProductItem{
	constructor(product){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.image = product.image;
	}

	render(){
		return	`<div class="product-item">
					<img src="${this.image}" alt="photo" class="img" width="100" height="50"></img>
					<h3 class="title">${this.title}</h3>
					<p class="txt">Стоимость: ${this.price}$</p>
					<button class="buy-btn">Купить</button>
				</div>`;
	}
}

let list = new ProductList();
list.sumProduct();

class Basket{
	addGoods(){}

	removeGoods(){}

	changeGoods(){}

	render(){}
}

class ElBasket{
	render();
}