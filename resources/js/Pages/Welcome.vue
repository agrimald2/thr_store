<script setup>
import StoreLayout from '@/Layouts/StoreLayout.vue';
</script>

<template>
    <StoreLayout>
        <div class="pb-12">
            <div style="margin-top:10vh; height: 40vh; width: 100%; box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 1);"
                id="home">
                <Carrousel />
            </div>
            <About />
            <div class="mt-6 max-w-9xl mx-auto sm:px-6 lg:px-8">
                <ProductsSelection />
            </div>
        </div>
    </StoreLayout>
</template>
<script>
import Carrousel from './Store/Carrousel.vue';
import ProductsSelection from './Store/ProductsSelection.vue';
import About from './Store/About.vue';
import Loader from '@/Components/Loader.vue';

export default {
    components: {
        Carrousel, ProductsSelection, About, Loader
    },
    data() {
        return {
        };
    },
}
</script>