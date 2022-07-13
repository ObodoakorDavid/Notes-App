/** @format */

import React, { useState } from "react";
import "./Style.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <AiOutlineSearch />
      <input
        onChange={(e) => {
          handleSearch(e);
        }}
        type="text"
        placeholder="search..."
      />
    </div>
  );
};

export default Search;
