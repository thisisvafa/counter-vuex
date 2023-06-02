<template>
    <div>
        <p>{{ count }}</p>
        <button @click="increase">Increase</button>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from 'vue';
const store = useStore();
const count = computed(() => store.state.count);
function increase() {
    // store.commit("increase", 4);
    store.commit("increase", 1);
}
</script>