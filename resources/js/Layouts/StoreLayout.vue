<template>
    <div>
        <Header :is-cart-open="isCartOpen" @toggle-cart="isCartOpen = !isCartOpen" />
        <Cart :is-open="isCartOpen" @update:is-open="isCartOpen = $event" />
        <main>
            <slot />
        </main>
        <Alert />
        <Footer />
    </div>
</template>
<script>
import Alert from '@/Components/SuccessAlert.vue';
import Header from '@/Layouts/Store/Header.vue';
import Footer from '@/Layouts/Store/Footer.vue';
import Cart from '@/Layouts/Store/Cart.vue';

export default {
    components: {
        Alert,
        Header,
        Footer,
        Cart
    },
    data() {
        return {
            isCartOpen: false,
        };
    },
}
</script>
<style></style>