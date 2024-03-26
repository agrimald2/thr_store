<template>
    <div>
        <Header :is-cart-open="isCartOpen" @toggle-cart="isCartOpen = !isCartOpen" />
        <Cart :is-open="isCartOpen" @update:is-open="isCartOpen = $event" />
        <main>
            <slot />
        </main>
        <Alert v-if="isAlertVisible" />
        <Footer />
    </div>
</template>
<script>
import { mapState } from 'vuex';
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
            alertKey: null,
        };
    },
    methods: {
        showSuccessAlert(key) {
            console.log(key);
            this.alertKey = key;
            setTimeout(() => {
                this.alertKey = null;
            }, 2000);
        },
    },
    computed: {
        ...mapState(['isAlertVisible']),
    }
}
</script>
<style></style>