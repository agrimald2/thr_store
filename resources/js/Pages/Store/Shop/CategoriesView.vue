<template>
    <div class="bg-gray-100">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none lg:py-2">
                <div class="mt-6 space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0">
                    <div class="group relative cursor-pointer" v-for="category in categories" :key="category.id"
                        @click.prevent="$emit('select-category', category.id)">
                        <div
                            class="relative h-48 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-1 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-48">
                            <img :src="'/storage' + category.image_url" :alt="category.description"
                                class="h-full w-full object-cover object-center">
                        </div>
                        <h3 class="mt-6 text-sm text-gray-500">
                            <span class="absolute inset-0"></span>
                            {{ category.name }}
                        </h3>
                        <p class="text-base font-semibold text-gray-900">{{ category.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['categories'],
    components: {
    },
    data() {
        return {
        };
    },
    created() {
    },
    methods: {

    }
}
</script>