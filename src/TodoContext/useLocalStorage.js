import React, { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [ chargeState, setChargeState ] = useState("Loading")

  useEffect(() => {
    setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let itemList = initialValue;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(itemList));
          } else {
            itemList = JSON.parse(localStorageItem);
          }
          setItem(itemList);
          setChargeState("Done")
        } catch (e) {
          setChargeState("Error")
        }
      }, 1000);
    }, []);
  

  const saveLocalStorage = (newItem) => {
    try{      
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
    }catch(error){
      setChargeState("Error")
    }
  };
  return { item, saveLocalStorage, chargeState };
}
