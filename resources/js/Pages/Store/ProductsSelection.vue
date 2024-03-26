<template>
    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" id="products-selection">
        <Loader v-if="!categories || !products" />
        <div v-else>
            <Search :searchTerm="searchTerm" @update:searchTerm="value => searchTerm = value" />
            <CategoriesView :categories="categories" @select-category="selectCategory" />
            <ProductsList :products="filteredProducts" @add-to-cart="$emit('add-to-cart', $event)" />
        </div>
    </div>
</template>
<script>
import CategoriesView from './Shop/CategoriesView.vue';
import ProductsList from './Shop/ProductsList.vue';
import Search from './Shop/Search.vue';
import Loader from '@/Components/Loader.vue';

export default {
    components: {
        CategoriesView, ProductsList, Search, Loader
    },
    data() {
        return {
            categories: null,
            products: null,
            searchTerm: '',
            selectedCategory: null,
        };
    },
    created() {
        this.getStoreProductsAndCategories();
    },
    computed: {
        filteredProducts() {
            if (this.searchTerm) {
                const searchTermLower = this.searchTerm.toLowerCase();
                return this.products.filter(product => {
                    return product.name.toLowerCase().includes(searchTermLower) ||
                        product.description.toLowerCase().includes(searchTermLower);
                });
            } else if (this.selectedCategory) {
                return this.products.filter(product => {
                    return product.category_id === this.selectedCategory;
                });
            }
            return this.products;
        }
    },
    methods: {
        getStoreProductsAndCategories() {
            axios.get('/api/store-products-categories')
                .then(response => {
                    this.categories = response.data.categories;
                    this.products = response.data.products;
                })
                .catch(error => {
                    console.error('There was an error fetching the store products and categories:', error);
                });
        },
        selectCategory(categoryId) {
            this.selectedCategory = categoryId;
        },
        clearFilters() {
            this.selectedCategory = null;
            this.searchTerm = '';
        }
    }
}
</script>