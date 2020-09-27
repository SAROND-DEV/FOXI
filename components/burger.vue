<template>
	<div v-if="show" @click="change" class="header__icon">
		<div class="header__burger" :class="{ 'header__burger_active': isActiveBurger }"></div>
	</div>
</template>

<script>
export default {
	name: 'VHeader',

	props: {
		show: {
			type: Boolean,
			default: true
		}
	},

	data() {
		return {
			isActiveBurger: false
		}
	},

	methods: {
		change() {
			this.$emit('beforeChange')

			if (this.isActiveBurger) {

				this.deactivate()

			} else {

				this.activate()

			}

			this.$emit('onChange')
		},

		activate() {

			this.isActiveBurger = true

			this.$emit('isActive')

		},

		deactivate() {

			this.isActiveBurger = false

			this.$emit('isInactive')
		}
	}
}
</script>

<style lang="scss" scoped>
	.header__icon {
		position: relative;
		width: 80px;
		height: 80px;
		cursor: pointer;
		transition: all .5s;

		&:hover > .header__burger,
		&:hover > .header__burger::before,
		&:hover > .header__burger::after {
			background-color: $hover-color;
		}
	}

	.header__burger {
		width: 50px;
		height: 6px;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;

		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 50px;
			height: 6px;
			background: #fff;
			box-shadow: 0 2px 5px rgba(0,0,0,0.2);
			transition: 0.5s;
		}

		&::before {
			top: -16px;
		}

		&::after {
			top: 16px;
		}
	}

	.header__burger_active,
	.header__burger_active::before,
	.header__burger_active::after {
		box-shadow: none;
	}

	.header__burger_active {
		background: rgba(0,0,0,0) !important;

		&::before {
			top: 0;
			transform: rotate(45deg);
		}

		&::after {
			top: 0;
			transform: rotate(135deg);
		}
	}
</style>
