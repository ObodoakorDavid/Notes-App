/** @format */

import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./Style.css";

const Header = ({ darkMode, darktheme }) => {
  return (
    <div>
      {darkMode ? (
        <MdDarkMode className="icon-toggle" onClick={darktheme} />
      ) : (
        <MdLightMode className="icon-toggle" onClick={darktheme} />
      )}
      <h1>Notes App</h1>
    </div>
  );
};

export default Header;
