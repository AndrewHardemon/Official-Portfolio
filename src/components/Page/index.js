import React from "react";
import { capFirstLetter } from '../../utils/helpers';
import "./index.css";

function Page({currentPage}){

  return (
    <section className="page-container">
      <h2>{capFirstLetter(currentPage.title)}</h2>
      <div>{currentPage.component}</div>
    </section>
  )
}

export default Page;