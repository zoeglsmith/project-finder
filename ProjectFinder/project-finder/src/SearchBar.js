import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function SearchBar({ value, OnChange }) {
  return <input className="searchBar" type="text" placeholder="Search..." />;
}
export default SearchBar;
