import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => {
    return {
      products: [],
      sortingByPrice: null,
      filteringByMaterial: null
    }
  },
  getters: {
    showedProducts() {
      let result = this.products;

      if (this.filteringByMaterial) {
        result = result.filter((el) => el.material == value);
      }

      switch (this.sortingByPrice) {
        case "asc":
          result.sort(
            (a, b) => a.price.current_price - b.price.current_price
          );
          break;

        case 'desc':
          result.sort(
            (a, b) => b.price.current_price - a.price.current_price
          );
          break;
      }

      return result;
    }
  },
  actions: {
    sortByPrice(e) {
      this.sortingByPrice = e.target.value;
    },
    filterByMaterial(e) {
      this.filteringByMaterial = e.target.value;
    }
  }
})
