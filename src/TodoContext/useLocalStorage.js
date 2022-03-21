import React, { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);

  try {
    useEffect(() => {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let itemList = initialValue;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(itemList));
        } else {
          itemList = JSON.parse(localStorageItem);
        }
        setItem(itemList);
      }, 1000);
    }, []);
  } catch (err) {}

  const saveLocalStorage = (newItem) => {
    const stringifyItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyItem);
    setItem(newItem);
  };

  return { item, saveLocalStorage };
}
