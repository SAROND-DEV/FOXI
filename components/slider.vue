<template>
    <div data-aos="fade-up" class="slider p-12 white-text">
        <div class="slider-image flex flex-col justify-around image h-full bg-cover bg-no-repeat bg-center bg-no-repeat">
            <div class="menu w-100 flex justify-between mx-5">
                <div data-aos="fade-right" class="logo image">
                    <img class="logo" src="/images/493a453a476a1be248e564f6ce014b50.png" alt="logo">
                </div>

            </div>

            <div class="wrapper w-75 mx-auto text-center font-bold">
                <div class="title text-xl">FOX!</div>
                <div class="subtitle text-lg">Capture the essence of typing</div>
            </div>

            <div class="nav flex w-75 mx-auto">
                <a data-aos="fade-up" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="btn-link mx-5 font-bold">Products</a>
				<a data-aos="fade-up" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="btn-link mx-5 font-bold">News</a>
				<a data-aos="fade-up" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLneRaqXoYlV10RUsU6uP-6cicVmwr0g2O&index=400" class="btn-link mx-5 font-bold">About us</a>
            </div>
        </div>
    </div>
</template>

<script>
import VBurger from '@/components/burger'

export default {
	name: 'VSlider',

	components: {
		VBurger
    }
}
</script>

<style lang="scss" scoped>
    .slider {
        min-height: 512px;
        height: 100vh;
	}

    .slider-image {
        background-image: url('/images/152.png');
	}
</style>
