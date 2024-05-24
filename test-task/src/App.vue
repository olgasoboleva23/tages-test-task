<script setup>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
const breadcrumbs = [
  {
    title: 'Главная',
    link: '/',
    disabled: true
  },
  {
    title: 'Системы хранения',
    link: '/storage-systems',
    disabled: true
  },
  {
    title: 'Комплекты стеллажных систем',
    link: window.location.href,
    disabled: false
  },
];
</script>

<template>
  <div id="app">
    <Breadcrumbs :items="breadcrumbs" />
    <header>
      <h1>Комплекты стеллажных систем</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  margin: 0.5em 8em;
  @media(max-width: 1000px) {
    margin: 0.1em 1em;
  }
  h1 {
    font-weight: 600;
    margin: 0;
  }
}
</style>
