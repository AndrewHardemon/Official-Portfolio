import React from "react";
import { capFirstLetter } from '../../utils/helpers';

function Page({currentPage}){

  return (
    <section>
      <h2>{capFirstLetter(currentPage.name)}</h2>
      <div>{currentPage.component}</div>
    </section>
  )
}

export default Page;