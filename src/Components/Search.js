/** @format */

import React, { useState } from "react";
import "./Style.css";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
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
