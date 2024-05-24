<script setup>
import { useProductStore } from "@/stores/products";
const store = useProductStore();

import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  cart: Array,
  favorites: Array
})

defineEmits(['changeFavorites', 'changeInCart']);

const imageUrl = new URL(`../assets/pic/${props.item.image.url}`, import.meta.url).href;

const inCart = computed(() => {
  return props.cart.includes(props.item.id);
})

const inFavorites = computed(() => {
  return props.favorites.includes(props.item.id);
})
</script>

<template>
  <div class="product-wrapper">
    <div v-if="item?.price?.old_price" class="sale">Скидка</div>
    <img class="product-photo" :src="imageUrl" alt="Изображение товара" />
    <div class="code">{{ item?.code }}</div>
    <div class="product-name">{{ item?.name }}</div>
    <div class="product-bottom-line">
      <div v-if="item?.price?.old_price" class="old-price">{{ Math.floor(item.price.old_price) }}</div>
      <div>{{ Math.floor(item.price.current_price) }}</div>
      <!-- cart icon -->
      <img
        @click="$emit('changeInCart',item.id)"
        class="to_cart"
        :class="{in_cart: inCart}"
      />
      <!-- heart icon -->
      <img
        @click="$emit('changeFavorites',item.id)"
        class="to_favorites"
        :class="{in_favorites: inFavorites}"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid #EEEEEE;
  padding: 10px;
  position: relative;
  aspect-ratio: 336/352;

  .sale {
    background-color: #ff324a;
    color: white;
    position: absolute;
    left: 0;
    font-size: 14px;
    padding: 2px 16px;
  }

  .product-photo {
    max-width: 80%;
    margin: auto;
  }

  .product-name {
    font-weight: 500;
    font-family: 'SF UI Text', sans-serif;
    margin: 6px 0;
  }
  .product-name, .bottom-line {
    font-size: 16px;
  }

  .code {
    font-size: 10px;
  }
  .code, .old-price {
    color: #888888;
  }

  .product-bottom-line {
    display: flex;
    flex-direction: row;
    column-gap: 10px;

    .old-price {
      text-decoration: line-through;
    }
    img {
      cursor: pointer;

      &.to_cart {
        mask: no-repeat center;
        mask-image: url("@/assets/icons/cart.svg");
        mask-size: 100% 100%;
        background-color: black;
        height: 100%;
        aspect-ratio: 1 / 1;
        margin-left: auto;
        &.in_cart {
          mask-image: url("@/assets/icons/circle-checked.svg");
          background-color: green;
        }
      }
      &.to_favorites {
        mask: url("@/assets/icons/heart.svg") no-repeat center;
        mask-size: 100% 100%;
        background-color: black;
        height: 100%;
        aspect-ratio: 1 / 1;
        &.in_favorites {
          background-color: red;
        }
      }
    }
  }
}
</style>
