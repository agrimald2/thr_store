<template>
    <carousel :items-to-show="1" :wrapAround="true" :autoplay="5000">
        <slide v-for="slide in slides" :key="slide.id" class="relative h-80 w-full">
            <div v-if="imageLoaded" class="h-full w-full bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: 'url(' + slide.background_img + ')' }">
                <div class="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <h1 class="text-white text-4xl font-bold mb-4">
                        {{ slide.title }}
                    </h1>
                    <p class="text-white text-lg mb-4">
                        {{ slide.subtitle }}
                    </p>
                    <a href="#" class="inline-block bg-white text-black px-6 py-2 text-sm font-medium rounded hover:bg-gray-100">
                        {{ slide.cta }}
                    </a>
                </div>
            </div>
            <div v-else class="h-full w-full flex justify-center items-center">
                <Loader />
            </div>
        </slide>
        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Loader from '@/Components/Loader.vue';
export default {
    data() {
        return {
            slides: [
                {
                    background_img: '/storage/images/settings/banner/1.jpg',
                    title: 'Tu Aliado en Minería',
                    subtitle: 'Equipos y Repuestos de Primera Calidad',
                    cta: 'Descubre Más'
                },
                {
                    background_img: 'storage/images/settings/banner/2.jpg',
                    title: 'Eficiencia y Productividad',
                    subtitle: 'Soluciones Especializadas para la Minería',
                    cta: 'Nuestros Servicios'
                },
                {
                    background_img: 'storage/images/settings/banner/3.jpg',
                    title: 'Liderando con Excelencia',
                    subtitle: 'Optimiza Tu Operación Minera',
                    cta: 'Contáctanos'
                }
            ],
            imageLoaded: false
        }
    },
    components: {
        Carousel,
        Slide,
        Loader,
        Pagination,
        Navigation,
    },
    mounted() {
        this.preloadImages();
    },
    methods: {
        preloadImages() {
            let imagesToLoad = this.slides.map(slide => slide.background_img);
            let loadedCount = 0;
            imagesToLoad.forEach((imageSrc) => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === imagesToLoad.length) {
                        this.imageLoaded = true;
                    }
                };
                img.src = imageSrc;
            });
        }
    }
}
</script>