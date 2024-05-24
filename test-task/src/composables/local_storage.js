import { ref } from 'vue'

export function useLocalStorage(storageName) {
  let items = ref([]);
  items.value = window.localStorage.getItem(storageName);
  items.value = items.value ? JSON.parse(items.value) : [];

  function inItems(id) {
    return items.value.includes(id);
  }

  function changeItems(itemId) {
    if (inItems(itemId)) {
      items.value = items.value.filter((id) => id != itemId);
    } else {
      items.value.push(itemId);
    }
    window.localStorage.setItem(storageName, JSON.stringify(items.value));
  }

  return { changeItems, items };
}
