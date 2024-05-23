// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => {
    return {
      products: [],
      showedProducts: []
    }
  },
  actions: {
    sortByPrice(e) {
      const value = e.target.value;
      switch (value) {
        case "asc":
          this.showedProducts.sort(
            (a, b) => a.price.current_price - b.price.current_price
          );
          break;

        default:
          this.showedProducts.sort(
            (a, b) => b.price.current_price - a.price.current_price
          );
          break;
      }
    },
    filterByMaterial(e) {
      const value = e.target.value;
      this.showedProducts = this.products.filter((el) => el.material == value);
    }
  }
  // const filterByMaterial = ref('')
  // const sortByPrice = ref('')
  // const showedProducts = computed(() => {
  //   if (sortByPrice) {
  //     switch (value) {
  //       case "asc":
  //         this.showedProducts.sort(
  //           (a, b) => a.price.current_price - b.price.current_price
  //         );
  //         break;
  //
  //       default:
  //         this.showedProducts.sort(
  //           (a, b) => b.price.current_price - a.price.current_price
  //         );
  //         break;
  //     }
  //   }
  //   return
  // })
})
