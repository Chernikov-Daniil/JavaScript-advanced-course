Vue.component('error', {
	props: ['errorMsg'],
	template: `
		<div class="error-block" v-show="errorMsg">
			<p class="error-txt">Не удаётся выполнить запрос к серверу</p>
		</div>`
})