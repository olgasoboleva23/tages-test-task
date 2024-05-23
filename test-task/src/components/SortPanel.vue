<script setup>
import { useProductStore } from "@/stores/products";
const store = useProductStore();

import materials from "@/info/materials.json";
</script>

<template>
  <menu class="sort-panel-wrapper">
    <div>Сортировать по:</div>
    <div class="options-wrapper">
      <select @change="store.sortByPrice">
        <option value="asc">Цена по возрастанию</option>
        <option value="desc">Цена по убыванию</option>
      </select>
      <select @change="store.filterByMaterial">
        <option
          v-for="material in materials"
          :value="material.id"
          :key="material.id"
        >
          {{ material.name }}
        </option>
        <option :value="null">Все</option>
      </select>
    </div>
  </menu>
</template>

<style scoped>
.sort-panel-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.options-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
