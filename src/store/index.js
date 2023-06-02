import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            count: 0,
        };
    },
    getters: {
        oddOrEvent(state) {
            if (state.count % 2 == 0) {
                return "Odd";
            } else {
                return "Even";
            }
        }
    },
    mutations: {
        increase(state, count) {
            state.count += count;
        }
    },
});