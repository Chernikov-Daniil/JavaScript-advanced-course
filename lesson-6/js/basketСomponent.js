Vue.component('basket', {
	props: ['cartItems', 'img', 'visibility'],
	template: `					
		<div v-show="visibility" class="basket">
			<p v-if="!cartItems.length">В корзине пусто</p>
			<cart-item v-for="item of cartItems" :img="img" :cart-item="item"></cart-item>
		</div>`
});

Vue.component('cart-item', {
	props: ['img', 'cartItem'],
	template: `
		<div class="basket-product-item">
			<img :src="img" alt="photo" class="basket-img"></img>
			<div class="wrp-desc">
				<h3 class="basket-title">{{ cartItem.product_name }}</h3>
				<p class="basket-txt">Стоимость: {{ cartItem.price *  cartItem.quantity}} $</p>
				<p class="basket-quantity">Кол-во: {{ cartItem.quantity }}</p>
			</div>
			<button class="basket-buy-btn" @click="$root.remove(cartItem)">&times;</button>
		</div>
	`
})