import { useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {

  const localStorageItem = localStorage.getItem(itemName);
  let itemList = initialValue;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(itemList));
  } else {
    itemList = JSON.parse(localStorageItem);
  }
  
  const [ item, setItem ] = useState(itemList)

  const saveLocalStorage = (newItem) => {
    const stringifyItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyItem);
    setItem(newItem);
  }

  return [item, saveLocalStorage];
};