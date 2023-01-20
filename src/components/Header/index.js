import React from "react";

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1 id="main_header">Andrew Hardemon</h1>
      <img src="" alt=""></img>
      {props.children}
    </header>
  )
}

export default Header;