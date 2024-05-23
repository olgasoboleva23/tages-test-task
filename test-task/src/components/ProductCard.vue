<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="product-wrapper">
    <div>{{ item?.code }}</div>
    <div>{{ item?.name }}</div>
    <div class="old-price">{{ item?.price?.old_price }}</div>
    <div>{{ item?.price?.current_price }}</div>
    <!-- heart icon -->
    <img />
    <!-- cart icon -->
    <img />
  </div>
</template>

<style scoped>
.product-wrapper {
  display: flex;
}
.old-price {
  text-decoration: line-through;
}
</style>
