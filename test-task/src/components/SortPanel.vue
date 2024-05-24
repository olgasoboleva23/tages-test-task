<script setup>
import { useProductStore } from "@/stores/products";
const store = useProductStore();

import materials from "@/assets/materials.json";
store.materials = materials.map((el) => el.id);
</script>

<template>
  <menu class="sort-panel-wrapper">
    <div class="options-wrapper">
      <label for="price_sort">Сортировать по:</label>
      <select :value="store.sortingByPrice" id="price_sort" @change="store.sortByPrice">
        <option value="asc">Цена по возрастанию</option>
        <option value="desc">Цена по убыванию</option>
      </select>
    </div>
    <div class="options-wrapper">
      <label for="material_filter">Материал:</label>
      <select :value="store.filteringByMaterial" id="material_filter" @change="store.filterByMaterial">
        <option
          v-for="material in materials"
          :value="material.id"
          :key="material.id"
        >
          {{ material.name }}
        </option>
        <option value="all">Все</option>
      </select>
    </div>
  </menu>
</template>

<style scoped>
.sort-panel-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  column-gap: 22px;
  margin: 1.8em 0;

  .options-wrapper {
    display: flex;
    flex-direction: column;

    select {
      border: none;
      border-right: 8px solid transparent;
      height: 35px;
      width: 252px;
      padding: 5px;
      font-weight: 400;
      font-size: 14px;
      
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-image: url("@/assets/icons/chevron-bottom.svg");
      background-repeat: no-repeat, repeat;
      background-position: right .6em top 50%, 0 0;
      &:focus {
        outline: none;
      }
    }

    select, option {
      background-color: #F2F2F2;
    }
    select, label {
      padding-left: 16px;
    }

    label {
      color: #4F4F4F;
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 8px;
    }
  }
}
</style>
