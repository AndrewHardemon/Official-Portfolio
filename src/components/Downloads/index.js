import React, { useState } from "react";
import saus from "../../assets/downloads/s.a.u.s_setup.exe"



function Downloads() {


  return (
    <div>
        <a href={saus} download><h1>SAUS</h1></a>
    </div>
  )

}



export default Downloads;

