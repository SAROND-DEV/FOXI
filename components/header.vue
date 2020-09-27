<template>
	<div class="header py-2 px-10" id="header">
		<nuxt-link :to="{ name: 'index' }" class="header__logo">
			<img class="logo" src="/images/493a453a476a1be248e564f6ce014b50.png" alt="logo">
		</nuxt-link>

		<div class="header__nav uppercase">
			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="btn-link mx-5 font-bold">Products</a>
			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="btn-link mx-5 font-bold">News</a>
			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="btn-link mx-5 font-bold">About us</a>
		</div>

	</div>
</template>

<script>
import VBurger from '@/components/burger'

export default {
	name: 'VHeader',

	components: {
		VBurger
	}
}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		background-color: $basic-color;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}

	img {
		cursor: pointer;
		transition: transform .5s;

		&:hover {
			transform: scale(.95);
		}
	}
</style>
