<script setup>
import { ref, computed } from 'vue'

import ProductCard from "@/components/ProductCard.vue";
import SortPanel from "@/components/SortPanel.vue";

import { useProductStore } from "@/stores/products";
const store = useProductStore();

import productsData from "@/info/items.json";

store.products = store.showedProducts = productsData;

const products = computed(() => {
  return store.showedProducts;
})
</script>

<template>
  <div>
    <SortPanel />
    <div class="product-list-wrapper">
      <ProductCard
        v-for="product in products"
        :item="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<style scoped>
.product-list-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
