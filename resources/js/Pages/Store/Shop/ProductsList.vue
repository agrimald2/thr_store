<template>
    <section id="Projects"
        class="max-w-full mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 justify-items-center gap-6 px-4 pt-8 pb-4">
        <template v-if="products.length">
            <div class="w-full max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                @click="handleAddToCart(product)" v-for="product in products" :key="product.id">
                <div class="flex flex-col items-center">
                    <img :src="'/storage' + product.image_url" alt="Product"
                        class="max-h-60 w-full object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-full">
                        <span class="text-gray-400 mr-3 uppercase text-xs">{{ product.category.name }}</span>
                        <p class="text-lg font-bold text-black truncate block capitalize">{{ product.name }}</p>
                        <div class="flex items-center justify-between w-full">
                            <p class="text-lg font-semibold text-black cursor-auto mb-1">${{ product.price }}</p>
                            <i class="fa-solid fa-cart-plus cursor-pointer text-xl darkblue-text"
                                @click.stop="handleAddToCart(product)"></i>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div v-else class="col-span-full flex flex-col items-center justify-center">
            <img src="https://dhihaafashions.com/noproduct.png" alt="No products found" class="w-1/2 max-w-md">
            <h3 class="text-xl font-semibold mt-4">No products found</h3>
            <p class="text-gray-600 mt-2">We can't seem to find any products that match your search.</p>
        </div>
    </section>
</template>
<script>
export default {
    props: ['products'],
    components: {

    },
    data() {
        return {

        };
    },
    methods: {
        handleAddToCart(product) {
            this.$store.dispatch('addToCart', product);
            this.$store.dispatch('showSuccessAlert');
        },
    }
}
</script>
<style></style>