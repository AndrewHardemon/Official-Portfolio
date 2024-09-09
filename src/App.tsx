import React, { useState } from "react";
import Page from "./components/Page";
import Footer from "./components/Footer";
import About from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Extra from "./components/Extra";
import Navbar from "./components/Navbar";


function App() {
  const [pages] = useState([
    { name: "about", component: <About/>, title: "about me"},
    { name: "portfolio", component: <Portfolio/>, title: "my projects"},
    { name: "contact", component: <Contact/>, title: "contact me"},
    { name: "extra", component: <Extra/>, title: "extras and downloads"},
    // { name: "downloads", component: <Downloads/>}
  ]);
  
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <Footer />
      <div className="m:h-screen w-100">
        <Navbar pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <div className="flex w-100 justify-center">
        <main className="w-100">
          <Page currentPage={currentPage}></Page>
        </main>
        </div>
      </div>
    </>
  );
}

export default App;
