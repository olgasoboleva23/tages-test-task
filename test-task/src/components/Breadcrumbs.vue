<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav>
    <ul>
      <template v-for="(item, i) in items">
        <li :class="{disabled: item.disabled}">
          <a :href="item.link">{{ item.title }}</a>
        </li>
        <li class="divider" v-if="i < items.length - 1">/</li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  font-size: 16px;
  font-weight: 400;

  li {
    display: inline;

    &.disabled {
      pointer-events: none;
    }

    &.divider {
      padding: 0 10px;
    }

    &.disabled, &.divider {
      color: #727783;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
