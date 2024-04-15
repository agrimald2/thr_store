<template>
    <div :class="{ 'hidden': !isOpen }">
        <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div class="pointer-events-auto w-screen max-w-md">
                            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl lg:pt-20 pt-12">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-medium darkblue-text" id="slide-over-title">
                                            Shopping cart
                                        </h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button" @click="closeCart"
                                                class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span class="absolute -inset-0.5"></span>
                                                <span class="sr-only">Close panel</span>
                                                <i class="fa-solid fa-x"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-8">
                                        <div class="flow-root">
                                            <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                <li v-for="(item, index) in cartItems" :key="index" class="flex py-6">
                                                    <div
                                                        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img :src="'/storage' + item.image_url" :alt="item.name"
                                                            class="h-full w-full object-cover object-center">
                                                    </div>

                                                    <div class="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div
                                                                class="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a :href="`/products/${item.id}`">{{ item.name
                                                                        }}</a>
                                                                </h3>
                                                                <p class="ml-4">${{ item.price }}</p>
                                                            </div>
                                                            <p class="mt-1 text-sm text-gray-500">{{ item.color }}</p>
                                                        </div>
                                                        <div class="flex flex-1 items-end justify-between text-sm">
                                                            <p class="text-gray-500">Qty {{ item.quantity }}</p>

                                                            <div class="flex">
                                                                <button type="button"
                                                                    @click="handleRemoveFromCart(item)"
                                                                    class="font-medium blue-text hover:text-indigo-500">Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium darkblue-text">
                                        <p>Subtotal</p>
                                        <p>${{ subtotal }}</p>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.
                                    </p>
                                    <div class="mt-6">
                                        <button @click="getPaymentLink"
                                            class="flex items-center justify-center rounded-md border border-transparent blue-background px-6 py-3 text-base font-medium text-white shadow-sm hover:lightblue-background">Checkout</button>
                                    </div>
                                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or
                                            <button @click="closeCart" type="button"
                                                class="font-medium blue-text hover:text-indigo-500">
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
    props: ['isOpen'],
    computed: {
        ...mapState(['cartItems']),
        subtotal() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        cartDescription() {
            return this.cartItems.map(item => `${item.name} (Qty: ${item.quantity})`).join(', ');
        }
    },
    methods: {
        closeCart() {
            console.log("A");
            this.$emit('update:is-open', false);
        },
        handleRemoveFromCart(product) {
            this.$store.dispatch('removeFromCart', product);
        },
        getPaymentLink() {
            const paymentApiUrl = 'https://xplatt.com/api/getPaymentLink';
            const amountUSD = this.subtotal;
            const currency = 'USD';
            const description = encodeURIComponent(this.cartDescription);

            axios.get(`${paymentApiUrl}?amount_usd=${amountUSD}&currency=${currency}&description=${description}`)
                .then(response => {
                    const paymentLink = response.data.paymentLink;
                    window.location.href = paymentLink;
                })
                .catch(error => {
                    console.error('Error fetching payment link:', error);
                });
        }
    }
}
</script>
