import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css"

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onChangeSearchValue = (ev) => {
    const value = ev.target.value.toLowerCase();
    setSearchValue(value);
  };

  return (
    <div className="search__container">
      <input className="search__input"
        placeholder="Search..."
        value={searchValue}
        onChange={onChangeSearchValue}
        />
        <span className="search__icon"></span>
    </div>
  );
}
