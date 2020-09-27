<template>
	<div class="footer py-5 text-white">
		<div class="copyright text-sm">
			<span>© 2020 All rights reserved</span>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'VFooter'
    }
</script>

<style lang="scss" scoped>
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		background-color: lighten($basic-color, 10%);
	}

	.footer__logo {
		position: absolute;
		top: 50%;
		left: 32px;
		transform: translateY(-50%);
	}
</style>
