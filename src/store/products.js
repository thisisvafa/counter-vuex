export default {
    state() {
        return {
            productName: "Laptop",
        };
    },
    getters: {
        getProductsName(state) {
            return state.productName + "____963";
        }
    },
    mutations: {},
    actions: {},
};