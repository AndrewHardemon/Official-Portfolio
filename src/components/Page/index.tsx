// import React from "react";
// import { capFirstLetter } from '../../utils/helpers';
import "./index.css";

interface PageProps {
  currentPage: {
    title: string,
    component: JSX.Element
  }
}

function Page({currentPage}: PageProps) {

  return (
    <section className="mt-5">
      <div className="bg-blue-700 p-3 border-2 border-black grid 2xl:grid-cols-2 xl:grid-cols-1" id="page-container">
        {currentPage.component}
      </div>
    </section>
  )
}

export default Page;