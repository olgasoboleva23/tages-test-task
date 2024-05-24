import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => {
    return {
      products: [],
      sortingByPrice: 'asc',
      filteringByMaterial: 'all',
      materials: [],
      // favorites: [],
      // cart: []
    }
  },
  getters: {
    showedProducts() {
      let result = this.products;

      if (this.materials.includes(this.filteringByMaterial)) {
        result = result.filter((el) => el.material == this.filteringByMaterial);
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
    },
    // changeInCart(itemId, inCart) {
    //   if (inCart) {
    //     this.cart.filter((id) => id !== itemId);
    //   } else {
    //     this.cart.push(itemId);
    //   }
    // },
    // changeFavorites(itemId, inFavorites) {
    //   if (inFavorites) {
    //     this.favorites.filter((id) => id !== itemId);
    //   } else {
    //     this.favorites.push(itemId);
    //   }
    // },
  }
})
