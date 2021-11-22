Vue.component('products', {
	props: ['products', 'img'],
	template: `<div class="products">
					<product v-for="item of products" :img="img" :product="item"></product>
			   </div>`
})

Vue.component('product', {
	props: ['product', 'img'],
	template: `<div class="product-item">
					<img :src="img" alt="photo" class="img" width="150" height="150">
					<h3 class="title">{{ product.product_name }}</h3>
					<p class="txt">Стоимость: {{ product.price }} $</p>
					<button class="buy-btn" @click = "$root.addProduct(product)">Купить</button>
			   </div>`
})