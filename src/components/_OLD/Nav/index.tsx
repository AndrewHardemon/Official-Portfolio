import React, {useEffect} from "react";
import {capFirstLetter} from "../../../utils/helpers"
import "./index.css"

interface NavProps {
  pages: {
    name: string,
    component: JSX.Element,
    title: string
  }[],
  setCurrentPage: (page: { name: string, component: JSX.Element, title: string }) => void,
  currentPage: {
    name: string,
    component: JSX.Element,
    title: string
  }
}

function Nav(props: NavProps){
  const {pages, setCurrentPage, currentPage} = props;

  useEffect(()=>{
    document.title = capFirstLetter(currentPage.name)
  }, [currentPage])

  return (
    <nav>
      <ul className="navigation-bar">
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