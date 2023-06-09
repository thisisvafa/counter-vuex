import { createStore } from "vuex";
import users from "./users";
import products from "./products"
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
    actions: {
        increaseCount(context, count) {
            context.commit('increase', count);
        }
    },
    modules: {
        users,
        products,
    }
});