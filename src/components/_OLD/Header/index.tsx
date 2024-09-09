import React from "react";
import "./index.css"

interface HeaderProps {
  children: React.ReactNode
}

function Header({children}: HeaderProps) {
  return (
    <header className="main-header px-1">
      <h1>Andrew Hardemon</h1>
      {children}
    </header>
  )
}

export default Header;