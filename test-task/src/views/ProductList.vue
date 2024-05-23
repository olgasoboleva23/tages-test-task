<script setup>
import { ref, computed } from 'vue'

import ProductCard from "@/components/ProductCard.vue";
import SortPanel from "@/components/SortPanel.vue";

import { useProductStore } from "@/stores/products";
const store = useProductStore();

import productsData from "@/info/items.json";

store.products = productsData;
</script>

<template>
  <div>
    <SortPanel />
    <div class="product-list-wrapper">
      <ProductCard
        v-for="product in store.showedProducts"
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
