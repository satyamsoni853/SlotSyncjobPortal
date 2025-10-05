import { json } from "stream/consumers";

const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string) => {
  const item = localStorage.getItem(key);
  const parsedItem = item ? JSON.parse(item) : null;
  return parsedItem;
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export { setItem, getItem, removeItem };