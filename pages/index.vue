<template>
	<div class="index">
		<v-slider ref="slider"></v-slider>

		<div class="product flex py-10" id="product">
			<div data-aos="fade-right" class="product-left w-3/5 white-text mb-16 p-16 flex flex-col justify-between">
				<div class="product-left__header">
					<div class="text-4xl font-bold mb-3">Inspired Typing</div>
					<div class="text-sm mb-5">Performance driven mechanical keyboards and peripherals</div>
					<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="btn-link font-bold uppercase">Our Products</a>
				</div>

				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="product-left__footer">
					<div class="text-2xl font-bold mb-3 flex justify-end">Keyboards</div>
					<div class="text-sm flex justify-end">Unrivaled Performance</div>
				</a >
			</div>

			<div class="product-right w-2/5 text-xs bg-white mt-16">
				<a data-aos="fade-left" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="flex">
					<div class="w-50 h-100 text-center flex flex-col flex-1 justify-center content-center">
						<div class="title mb-3 font-bold">Mice</div>
						<div class="description">Precision & Comfort</div>
					</div>
					<div class="w-50 img-fluid flex-1 overflow-hidden">
						<img class="w-100" src="https://www.duckychannel.com.tw/upload/2020_02_212/2020022117303670ogmf5lz1.jpg" alt="Mice">
					</div>
				</a>

				<a data-aos="fade-right" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="flex flex-row-reverse">
					<div class="w-50 h-100 text-center flex flex-col flex-1 justify-center content-center">
						<div class="title mb-3 font-bold">Gaming Chairs</div>
						<div class="description">Premium chairs that provide all day comfort</div>
					</div>
					<div class="w-50 img-fluid flex-1 overflow-hidden">
						<img class="w-100" src="https://www.duckychannel.com.tw/upload/2019_05_042/20190504145449w331qfHU01.png" alt="Gaming Chairs">
					</div>
				</a>

				<a data-aos="fade-left" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="flex">
					<div class="w-50 h-100 text-center flex flex-col flex-1 justify-center content-center">
						<div class="title mb-3 font-bold">Keycaps</div>
						<div class="description">Engineered for the ultimate typing experience</div>
					</div>
					<div class="w-50 img-fluid flex-1 overflow-hidden">
						<img class="w-100" src="https://www.duckychannel.com.tw/upload/2019_05_042/20190504112727jn8xdq5yV1.png" alt="Keycaps">
					</div>
				</a>
			</div>
		</div>

		<div class="about text-white font-bold">
			<div class="title mb-3 text-3xl">
				<span>Creativity at Your Fingertips</span>
			</div>
			<div class="subtitle mb-5 text-sm">
				<span>Switch the World</span>
			</div>

			<div class="about__link flex flex-row items-center">
				<img src="https://www.duckychannel.com.tw/upload/f2e/home/about_icon.svg" alt="idea">
				<a class="btn-link mx-3" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400">ABOUT US</a>

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,192C672,171,768,117,864,133.3C960,149,1056,235,1152,250.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
import VSlider from '@/components/slider'

	export default {
		components: {
			VSlider
		},

		mounted() {

			window.addEventListener('scroll', () => {
				this.isVisible(this.$refs.slider.$el) ? this.hideElementById('header') : this.showElementById('header')
			});

			this.isVisible(this.$refs.slider.$el) ? this.hideElementById('header') : this.showElementById('header')
		},

		methods: {
			showElementById(target) {
				this.removeClass(target, ['fade-out'])
				this.addClass(target, ['fade-in'])
			},

			hideElementById(target) {
				this.removeClass(target, ['fade-in'])
				this.addClass(target, ['fade-out'])
			},

			isVisible(target) {
				let targetPosition = {
					top: target.offsetTop,
					bottom: target.offsetHeight
				}

				let windowPosition = {
					top: window.pageYOffset,
					bottom: window.pageYOffset + document.documentElement.clientHeight
				};

				if (targetPosition.bottom > windowPosition.top &&
					targetPosition.top < windowPosition.bottom) {

					return true

				}

				return false
			},

			addClass(target, className) {
				let el = document.getElementById(target);
				el.classList.add(className.join(' '));
			},

			removeClass(target, className) {
				let el = document.getElementById(target);
				el.classList.remove(className.join(' '));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product {
		width: 100%;

		.product-left {
			background-image: url('https://www.duckychannel.com.tw/upload/2019_07_122/20190712172056ftp99enYt1.jpg');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
		}

		.product-right > div,
		.product-right > div img {
			cursor: pointer;
			transition: all .5s;

			&:hover,
			&:hover img {
				background-color: $black-filter;
			}

			&:hover img {
				transform: scale(1.2);
			}
		}
	}

	.about {
		height: 800px;
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.duckychannel.com.tw/upload/2019_07_222/201907221151365srap6oz71.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;

		svg {
			position: absolute;
			bottom: 0;
			left: 0;
			fill: lighten($basic-color, 10%);
		}
	}
</style>
