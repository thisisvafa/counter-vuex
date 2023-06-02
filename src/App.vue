<template>
  <counter></counter>
  <hr />
  {{ count }}
  <hr />
  {{ oddOrEven }}

  <hr />
  
  {{ name }}
  
  <hr />
  
  {{ productsName }}
</template>

<script setup>
import Counter from "@/components/Counter.vue"
import { useStore } from "vuex";
import { computed } from 'vue';
const store = useStore();
const count = computed(() => store.state.count);
const oddOrEven = computed(() => store.getters.oddOrEvent);

const name = computed(() => store.state.users.Name);
const productsName = computed(() => store.getters.getProductsName);
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
