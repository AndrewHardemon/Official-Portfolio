import React, {useEffect} from "react";
import {capFirstLetter} from "../../utils/helpers"
// import styles from "./style.module.css"
function Nav(props){
  const {pages, setCurrentPage, currentPage} = props;

  useEffect(()=>{
    document.title = capFirstLetter(currentPage.name)
  }, [currentPage])

  return (
    <nav>
      <ul className="flex-row">
        {pages?.map(page => (
          <li
            className={`mx-5 ${currentPage.name === page.name ?? 'navActive'}`}
            key={page.name}
          >
            <span onClick={() => setCurrentPage(page)}>{capFirstLetter(page.name)}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;