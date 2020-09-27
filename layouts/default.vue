<template>
	<div class="index">
		<v-header />
		<nuxt />
		<v-footer />
	</div>
</template>

<script>
import VHeader from '@/components/header'
import VFooter from '@/components/footer'

import AOS from 'aos'

	export default {
		components: {
			VHeader,
			VFooter
		},

		mounted() {
			AOS.init();
		}
	}
</script>

<style lang="scss" scoped>

</style>
