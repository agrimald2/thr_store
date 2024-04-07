<template>
    <header>
        <section
            class='fixed top-0 left-0 right-0 z-20 shadow-md bg-white font-sans flex items-center justify-between py-3 px-10 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]'>
            <a href="/" class="block w-36 md:w-48">
                <img src="/storage/images/settings/logo.png" alt="logo" class="w-full md:hidden" />
                <img src="/storage/images/settings/logo_large.png" alt="logo" class="hidden w-full md:block" />
            </a>
            <div class='flex flex-wrap px-10 overflow-x-auto'>
                <ul id="collapseMenu" ref="collapseMenu"
                    class='lg:!flex justify-center lg:space-x-10 max-lg:space-y-3 max-lg:hidden w-full max-lg:mt-2'>

                    <li class='max-lg:border-b max-lg:py-2'>
                        <a href='#home'
                            class='hover:text-[#051650] hover:underline text-[#051650] font-bold text-[15px] block'>Home</a>
                    </li>
                    <li class='max-lg:border-b max-lg:py-2'>
                        <a href='#about'
                            class='hover:text-[#051650] hover:underline text-[#051650] font-bold text-[15px] block'>Nosotros</a>
                    </li>
                    <li class='max-lg:border-b max-lg:py-2'>
                        <a href='https://wa.me/995028146'
                            class='hover:text-[#051650] hover:underline text-[#051650] font-bold text-[15px] block'>Contacto</a>
                    </li>
                    <li class='max-lg:border-b max-lg:py-2'>
                        <a href='#products-selection'
                            class='inline-block px-4 py-1 border border-transparent text-base font-medium rounded-md text-white black-background hover:bg-gray-700 hover:underline cursor-pointer'>Comprar</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center">
                <i class="cursor-pointer text-gray-500 text-2xl mx-2 fa-solid fa-book mr-5"
                    @click="goTo('/complaint')"></i>
                <i class="cursor-pointer darkblue-text text-2xl mx-2 fa-brands fa-facebook"
                    @click="goTo('https://www.facebook.com/profile.php?id=61557244334272')"></i>
                <i class="cursor-pointer darkblue-text text-2xl mx-2 fa-brands fa-instagram"
                    @click="goTo('https://www.instagram.com/thrcorporation/?hl=es')"></i>
                <i class="cursor-pointer darkblue-text text-2xl mx-2 fa-brands fa-whatsapp"
                    @click="goTo('https://wa.me/995028146')"></i>
                <div class="inline-block border-gray-300 border-l-2 pl-6 cursor-pointer relative"
                    @click="$emit('toggle-cart')">
                    <i class="darkblue-text fa-solid fa-cart-shopping"></i>
                    <span
                        class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {{ cartItemsCounter }}
                    </span>
                </div>
            </div>
        </section>
    </header>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
        }
    },
    methods: {
        toggleMenu() {
            const collapseMenu = this.$refs.collapseMenu;
            collapseMenu.style.display = collapseMenu.style.display === 'block' ? 'none' : 'block';
        },
        goTo(url) {
            window.location.href = url;
        }
    },
    computed: {
        ...mapState(['cartItems', 'cartItemsCounter']),
    }
}
</script>
<style></style>