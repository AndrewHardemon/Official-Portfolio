import React from "react";
import "./style.css"

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1 id="main_header">Andrew Hardemon</h1>
      {props.children}
    </header>
  )
}

export default Header;