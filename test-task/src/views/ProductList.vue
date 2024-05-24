<script setup>
import ProductCard from "@/components/ProductCard.vue";
import SortPanel from "@/components/SortPanel.vue";

import { useProductStore } from "@/stores/products";
const store = useProductStore();

import productsData from "@/assets/items.json";

store.products = productsData;


import { useLocalStorage } from "@/composables/local_storage";

const {changeItems: changeFavorites, items: favorites} = useLocalStorage('favorites');
const {changeItems: changeInCart, items: cart} = useLocalStorage('cart');
</script>

<template>
  <div>
    <SortPanel />
    <div class="product-list-wrapper">
      <ProductCard
        v-for="product in store.showedProducts"
        :favorites="favorites"
        @change-favorites="changeFavorites"
        :cart="cart"
        @change-in-cart="changeInCart"
        :item="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-list-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media(max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
    @media(max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
      @media(max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
  row-gap: 20px;
  column-gap: 20px;
}
</style>
