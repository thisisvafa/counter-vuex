import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increase(state, count) {
            state.count += count;
        }
    },
});