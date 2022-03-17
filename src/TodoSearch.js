import React from "react";
import "./TodoSearch.css"

export function TodoSearch(props) {

  const onChangeSearchValue = (ev) => {
    const value = ev.target.value.toLowerCase();
    props.setSearchValue(value);
  };

  return (
    <div className="search__container">
      <input className="search__input"
        placeholder="Search..."
        value={props.searchValue}
        onChange={onChangeSearchValue}
        />
        <span className="search__icon"></span>
    </div>
  );
}
