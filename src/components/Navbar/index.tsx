import { useState, useEffect } from "react";
import { capFirstLetter } from "../../utils/helpers"
import "./index.css"


interface Page {
  name: string,
  component: JSX.Element,
  title: string
}

interface NavProps {
  pages: Page[],
  setCurrentPage: (page: { name: string, component: JSX.Element, title: string }) => void,
  currentPage: {
    name: string,
    component: JSX.Element,
    title: string
  }
}

function Nav(props: NavProps) {
  const { pages, setCurrentPage, currentPage } = props;
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    document.title = capFirstLetter(currentPage.name)
  }, [currentPage])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const setPage = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav id="navbar" className="bg-blue-900 border-2 border-black">
      <div className="w-100 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Andrew Hardemon
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {pages?.map((page) => (
              <li key={page.name}>
                <span
                  className={`block py-2 px-3 md:p-0 ${
                    currentPage.name === page.name
                      ? "text-blue-300 border-b-2 border-blue-300"
                      : "text-white"
                  }`}
                  aria-current="page"
                  onClick={() => setPage(page)}
                >
                  {capFirstLetter(page.name)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;