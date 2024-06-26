import { createStore } from 'vuex';

export default createStore({
    state: {
        cartItems: [],
        cartItemsCounter: 0,
        isAlertVisible: false,
    },
    mutations: {
        ADD_TO_CART(state, product) {
            const existingProduct = state.cartItems.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                state.cartItems.push({ ...product, quantity: 1 });
            }
            state.cartItemsCounter = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
        REMOVE_FROM_CART(state, product) {
            const existingProduct = state.cartItems.find(item => item.id === product.id);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity--;
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== product.id);
            }
            state.cartItemsCounter = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
        SET_ALERT_VISIBLE(state, isVisible) {
            state.isAlertVisible = isVisible;
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
        removeFromCart({ commit }, product) {
            commit('REMOVE_FROM_CART', product);
        },
        showSuccessAlert({ commit }) {
            commit('SET_ALERT_VISIBLE', true);
            setTimeout(() => {
                commit('SET_ALERT_VISIBLE', false);
            }, 2000);
        },
    },
});