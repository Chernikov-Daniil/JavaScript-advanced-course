class Param{
	constructor(element){
		this.name = element.value;
		this.price = +element.dataset['price'];
		this.calories = +element.dataset['calories'];
	}
}

class Burger{
	constructor(size,add,toping){
		this.size = new Param(this._select(size));
		this.add = new Param(this._select(add));
		this.toping = this._getTopings(toping);
	}

	_select(name){
		return document.querySelector(`input[name=${name}]:checked`);
	}

	_selectAll(name){
		return [...document.querySelectorAll(`input[name=${name}]:checked`)];
	}

	_getTopings(name){
		let result = [];
		this._selectAll(name).forEach((element) => {
			let obj = new Param(element);
			result.push(obj);
		})
		return result;
	}

	_sumPrice(){
		let sum = this.size.price + this.add.price;
		this.toping.forEach((element) => sum += element.price);
		return sum;
	}

	_sumCalories(){
		let sum = this.size.calories + this.add.calories;
		this.toping.forEach((element) => sum += element.calories);
		return sum;
	}

	showSum(price, calories){
		document.querySelector(price).textContent = this._sumPrice();
		document.querySelector(calories).textContent = this._sumCalories();
	}
}