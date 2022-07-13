/** @format */

import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./Style.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  let darktheme = () => {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };
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
