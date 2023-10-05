import React from "react";
import "./index.css"

function Header(props) {
  return (
    <header className="main-header px-1">
      <h1>Andrew Hardemon</h1>
      {props.children}
    </header>
  )
}

export default Header;