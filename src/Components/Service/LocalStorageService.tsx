import { json } from "stream/consumers";

const setItem = (key: string, value: any) => {
  console.log(`LocalStorage: Setting item with key "${key}"`, value);
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string) => {
  const item = localStorage.getItem(key);
  const parsedItem = item ? JSON.parse(item) : null;
  console.log(`LocalStorage: Getting item with key "${key}"`, parsedItem);
  return parsedItem;
};

const removeItem = (key: string) => {
  console.log(`LocalStorage: Removing item with key "${key}"`);
  localStorage.removeItem(key);
};

export { setItem, getItem, removeItem };
