<template>
  <counter></counter>
  <hr />
  {{ count }}
</template>

<script setup>
import Counter from "@/components/Counter.vue"
import { useStore } from "vuex";
import { computed } from 'vue';
const store = useStore();
const count = computed(() => store.state.count);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
